using Microsoft.EntityFrameworkCore;
using SubscriptionService.Data;
using SubscriptionService.Repositories;
using SubscriptionService.Services;
using SubscriptionService.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Database Context
builder.Services.AddDbContext<SubscriptionDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("SubscriptionDb"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("SubscriptionDb"))
    ));

// Dependency Injection
builder.Services.AddScoped<ISubscriptionRepository, SubscriptionRepository>();
builder.Services.AddScoped<ISubscriptionService, subscriptionService>();

// CORS (if needed for frontend)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowAll");
app.UseAuthorization();
app.MapControllers();

// Seed database on startup
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<SubscriptionDbContext>();
    dbContext.Database.Migrate();

    // Seed data if it doesn't exist
    if (!dbContext.SubscriptionPlans.Any())
    {
        dbContext.SubscriptionPlans.AddRange(
            new SubscriptionPlan { PlanId = 1, Name = "Basic", Price = 19.99m, Duration = "30 Day", MaxProducts = 10 },
            new SubscriptionPlan { PlanId = 2, Name = "Premium", Price = 29.99m, Duration = "90 Day", MaxProducts = 30 },
            new SubscriptionPlan { PlanId = 3, Name = "Entreprise", Price = 69.99m, Duration = "365 Day", MaxProducts = 400 }
        );
        dbContext.SaveChanges();
    }
}

app.Run();