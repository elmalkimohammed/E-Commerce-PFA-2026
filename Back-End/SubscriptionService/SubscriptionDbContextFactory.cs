using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using SubscriptionService.Data;

public class SubscriptionDbContextFactory : IDesignTimeDbContextFactory<SubscriptionDbContext>
{
    public SubscriptionDbContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<SubscriptionDbContext>();

        // Dummy connection string just for migration generation — no real DB needed
        optionsBuilder.UseMySql(
            "Server=localhost;Database=SubscriptionDb;User=root;Password=root;",
            new MySqlServerVersion(new Version(8, 0, 0))
        );

        return new SubscriptionDbContext(optionsBuilder.Options);
    }
}