using Microsoft.EntityFrameworkCore;
using OrderService.Models;

namespace OrderService.Data;

public class AppDbContext : DbContext
{
    public DbSet<Order> Orders => Set<Order>();
    public DbSet<OrderItem> OrderItems => Set<OrderItem>();

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Order>()
            .HasMany(o => o.OrderItems)
            .WithOne()
            .HasForeignKey(o => o.OrderId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}