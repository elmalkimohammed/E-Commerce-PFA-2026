using SubscriptionService.Models;

namespace SubscriptionService.Data;

public static class SeedData
{
    public static void Initialize(SubscriptionDbContext context)
    {
        // Check if plans already exist
        if (context.SubscriptionPlans.Any())
        {
            return;
        }
        
        // Seed SubscriptionPlans
        var plans = new SubscriptionPlan[]
        {
            new SubscriptionPlan
            {
                Name = "Basic Plan",
                Price = 19.99m,
                Duration = "30days",
                MaxProducts = 10
            },
            new SubscriptionPlan
            {
                Name = "Premium Plan",
                Price = 29.99m,
                Duration = "90days",
                MaxProducts = 30
            },
            new SubscriptionPlan
            {
                Name = "Entreprise Plan",
                Price = 69.99m,
                Duration = "365days",
                MaxProducts = 400
            }
        };
        
        context.SubscriptionPlans.AddRange(plans);
        context.SaveChanges();
    }
}