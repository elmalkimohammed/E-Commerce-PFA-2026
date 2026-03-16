
using MySqlConnector;
using TicketProductApi.Repo;

namespace TicketProductApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            builder.Services.AddOpenApi();
            // Configure The CORS Policy To Accept Our React App (Cross-Origin)
            builder.Services.AddCors(options =>
                {
                    options.AddPolicy("AllowReact", policy => policy.WithOrigins("http://localhost:5173").AllowAnyHeader().AllowAnyMethod());
                }
            );
            builder.Services.AddScoped<MySqlConnection>(sp =>
            new MySqlConnection(builder.Configuration.GetConnectionString("DefaultConnection"))
            );
            builder.Services.AddScoped<IProducthandler, ProductHandler>();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
            }
            app.UseCors("AllowReact");

            // Activate The CORS Policy
            app.UseCors("AllowReact");

            // app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
