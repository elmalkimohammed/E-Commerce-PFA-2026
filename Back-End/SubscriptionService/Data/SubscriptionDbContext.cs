using Microsoft.EntityFrameworkCore;
using SubscriptionService.Models;

namespace SubscriptionService.Data;

public class SubscriptionDbContext : DbContext
{
    public SubscriptionDbContext(DbContextOptions<SubscriptionDbContext> options)
        : base(options)
    {
    }
    
    public DbSet<SubscriptionPlan> SubscriptionPlans { get; set; }
    public DbSet<SubscribedUser> SubscribedUsers { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        // Configure SubscriptionPlan
        modelBuilder.Entity<SubscriptionPlan>(entity =>
        {
            entity.HasKey(e => e.PlanId);
            entity.Property(e => e.Name).IsRequired().HasMaxLength(50);
            entity.Property(e => e.Price).IsRequired().HasColumnType("decimal(18,2)");
            entity.Property(e => e.Duration).IsRequired().HasMaxLength(20);
            entity.Property(e => e.MaxProducts).IsRequired();

            entity.HasData(
                new SubscriptionPlan
                {
                    PlanId = 1,
                    Name = "Basic",
                    Price = 19.99m,
                    Duration = "30 Day",
                    MaxProducts = 10
                },
                new SubscriptionPlan
                {
                    PlanId = 2,
                    Name = "Premium",
                    Price = 29.99m,
                    Duration = "90 Day",
                    MaxProducts = 30
                },
                new SubscriptionPlan
                {
                    PlanId = 3,
                    Name = "Entreprise",
                    Price = 69.99m,
                    Duration = "365 Day",
                    MaxProducts = 400
                }
            );

        });
        
        // Configure SubscribedUser
        modelBuilder.Entity<SubscribedUser>(entity =>
        {
            entity.HasKey(e => e.SubId);
            entity.Property(e => e.UserId).IsRequired();
            entity.Property(e => e.PlanId).IsRequired();
            entity.Property(e => e.StartDate).IsRequired();
            entity.Property(e => e.EndDate).IsRequired();
            entity.Property(e => e.Status).IsRequired().HasMaxLength(20);
            
            entity.HasOne(e => e.SubscriptionPlan)
                  .WithMany(p => p.SubscribedUsers)
                  .HasForeignKey(e => e.PlanId)
                  .OnDelete(DeleteBehavior.Restrict);
                  
            entity.HasIndex(e => e.UserId);
            entity.HasIndex(e => e.Status);
        });
    }
}