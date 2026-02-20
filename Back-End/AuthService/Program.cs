using AuthService.Helpers;
using AuthService.Repository;
using AuthService.Services;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

// Configure The CORS Policy To Accept Our React App (Cross-Origin)
builder.Services.AddCors(options =>
    {
        options.AddPolicy("AllowReact", policy => policy.WithOrigins("http://localhost:5173/").AllowAnyHeader().AllowAnyMethod());
    }
);

// Register The JwtGenerator Class As A Service
builder.Services.AddAuthentication("Bearer")
.AddJwtBearer(
    "Bearer",
    options =>
    {
        var jwtSettings = builder.Configuration.GetSection("JwtSettings");
        var key = Encoding.UTF8.GetBytes(jwtSettings["SecretKey"]! ) ;
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateIssuerSigningKey = true,
            ValidateLifetime = true,
            ValidIssuer = jwtSettings["Issuer"],
            ValidAudience = jwtSettings["Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(key)
        };
    }
);

// Inject Our Multiples Dependencies
builder.Services.AddScoped<IAuthService, AuthService.Services.AuthService>();
builder.Services.AddScoped<IUserRepository, userRepository>();
builder.Services.AddScoped<JwtGenerator>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

// Activate The CORS Policy
app.UseCors("AllowReact");

app.UseAuthorization();

app.MapControllers();

app.Run();
