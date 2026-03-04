using CartService.Repository;
using CartService.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

// Dependency Injection For The Cart Repository And The Product Client
builder.Services.AddScoped<ICartRepository, CartRepository>();
builder.Services.AddHttpClient<IProductClient, ProductClient>();
builder.Services.AddScoped<ICartService, CartService.Services.CartService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
