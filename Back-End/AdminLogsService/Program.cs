using AdminLogsService.Services;
using UserAuditLoggingService.Services;

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

builder.Services.AddSingleton<IAuditFileStorage, AuditFileStorage>();
builder.Services.AddScoped<IAuditInventory, AuditInventory>();
builder.Services.AddHostedService<KafkaAuditConsumer>();

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
