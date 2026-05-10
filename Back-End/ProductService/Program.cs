using MySqlConnector;
using TicketProductApi.Repo;
using ProductService.Service;
using ProductService.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// ========== ADD JWT AUTHENTICATION ==========
var jwtSettings = builder.Configuration.GetSection("JwtSettings");
var secretKey = jwtSettings["SecretKey"] ?? "x7K#mP9$qL2@nR5&wJ8*vB3^hF6!uD4%";
var key = Encoding.UTF8.GetBytes(secretKey);

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = jwtSettings["Issuer"] ?? "AuthService",
            ValidAudience = jwtSettings["Audience"] ?? "EcommerceUsers",
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ClockSkew = TimeSpan.Zero
        };
        
        // For debugging - log token validation
        options.Events = new JwtBearerEvents
        {
            OnTokenValidated = context =>
            {
                Console.WriteLine("Token validated successfully");
                return Task.CompletedTask;
            },
            OnAuthenticationFailed = context =>
            {
                Console.WriteLine($"Authentication failed: {context.Exception.Message}");
                return Task.CompletedTask;
            }
        };
    });

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

// Configure CORS Policy to accept your React App
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", policy => 
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials()
    );
});

// Register Database and Services
builder.Services.AddScoped<MySqlConnection>(sp =>
    new MySqlConnection(builder.Configuration.GetConnectionString("DefaultConnection"))
);
builder.Services.AddScoped<IProducthandler, ProductHandler>();
builder.Services.AddScoped<ProductEventService>();
builder.Services.AddSingleton<IKafkaProducerService, KafkaProducerService>();

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors("AllowReact");
app.UseAuthentication();  // ADD THIS - Important!
app.UseAuthorization();
app.MapControllers();

app.Run();