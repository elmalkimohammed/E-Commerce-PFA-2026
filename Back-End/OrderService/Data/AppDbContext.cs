using Microsoft.EntityFrameworkCore;
using OrderService.Entities;

namespace OrderService.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Order> Orders => Set<Order>();
    public DbSet<OrderItem> OrderItems => Set<OrderItem>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(o => o.OrderId);
            entity.Property(o => o.Status).HasConversion<string>();
            entity.Property(o => o.CreatedAt).HasDefaultValueSql("CURRENT_TIMESTAMP(6)");

            entity.HasMany(o => o.OrderItems)
                  .WithOne(i => i.Order)
                  .HasForeignKey(i => i.OrderId)
                  .OnDelete(DeleteBehavior.Cascade);
        });

        modelBuilder.Entity<OrderItem>(entity =>
        {
            entity.HasKey(i => i.OrderItemId);
            entity.Property(i => i.UnitPrice).HasColumnType("decimal(18,2)");
        });
    }
}