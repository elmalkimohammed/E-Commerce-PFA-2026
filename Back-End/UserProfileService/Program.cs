using UserProfileService.Repository;
using UserProfileService.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace UserProfileService
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();
            builder.Services.AddOpenApi();
            
            builder.Services.AddHostedService<KafkaConsumerService>();
            builder.Services.AddScoped<IUserProfileHandler, UserProfileHandler>();
            builder.Services.AddSingleton<IKafkaProducerService, KafkaProducerService>();
            builder.Services.AddControllers().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.Converters.Add(
                new System.Text.Json.Serialization.JsonStringEnumConverter());
            });
            builder.Services.AddAuthentication("Bearer")
            .AddJwtBearer("Bearer", options =>
            {
                var jwtSettings = builder.Configuration.GetSection("JwtSettings");
                var key = Encoding.UTF8.GetBytes(jwtSettings["SecretKey"]!);

                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,

                    ValidIssuer = jwtSettings["Issuer"],
                    ValidAudience = jwtSettings["Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(key)
                };
            });
            builder.Services.AddCors(options =>
                {
                    options.AddPolicy("AllowReact", policy => policy.WithOrigins("http://localhost:5173").AllowAnyHeader().AllowAnyMethod());
                }
            );

            builder.Services.AddAuthorization();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
            }
            // Activate The CORS Policy
            app.UseCors("AllowReact");
            app.UseHttpsRedirection();
            app.UseAuthentication();
            
            app.UseAuthorization();
            app.MapControllers();

            app.Run();
        }
    }
}