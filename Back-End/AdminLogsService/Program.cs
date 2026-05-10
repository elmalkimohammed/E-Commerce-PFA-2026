using AdminLogsService.Services;
using UserAuditLoggingService.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Read JWT settings from appsettings.json (NO hardcoded fallback)
var jwtSettings = builder.Configuration.GetSection("JwtSettings");
var secretKey = jwtSettings["SecretKey"];  // Will throw error if missing - that's good!
var key = Encoding.UTF8.GetBytes(secretKey);

// Add JWT Authentication
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = jwtSettings["Issuer"],
            ValidAudience = jwtSettings["Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ClockSkew = TimeSpan.Zero
        };
    });

builder.Services.AddControllers();
builder.Services.AddOpenApi();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", policy =>
            policy.WithOrigins("http://localhost", "http://localhost:5173", "http://localhost:80")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials()
    );
});

builder.Services.AddSingleton<IAuditFileStorage, AuditFileStorage>();
builder.Services.AddScoped<IAuditInventory, AuditInventory>();
builder.Services.AddHostedService<KafkaAuditConsumer>();

var app = builder.Build();
var auditLogsPath = Path.Combine(app.Environment.ContentRootPath, "AuditLogs");
Directory.CreateDirectory(auditLogsPath); 
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors("AllowReact");
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();