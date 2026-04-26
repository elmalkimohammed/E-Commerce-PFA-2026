using SubscriptionService.Models;

namespace SubscriptionService.Repositories;

public interface ISubscriptionRepository
{
    // Subscription Plans
    Task<IEnumerable<SubscriptionPlan>> GetAllPlansAsync();
    Task<SubscriptionPlan?> GetPlanByIdAsync(int planId);
    
    // Subscribed Users
    Task<SubscribedUser?> GetSubscriptionByIdAsync(int subId);
    Task<IEnumerable<SubscribedUser>> GetSubscriptionsByUserIdAsync(Guid userId);
    Task<SubscribedUser?> GetActiveSubscriptionByUserIdAsync(Guid userId);
    Task<SubscribedUser> AddSubscriptionAsync(SubscribedUser subscription);
    Task<bool> UpdateSubscriptionAsync(SubscribedUser subscription);
    Task<bool> CancelSubscriptionAsync(int subId);
    Task<bool> SubscriptionExistsAsync(int subId);
    Task<bool> UserHasActiveSubscriptionAsync(Guid userId);
    Task<List<SubscribedUser>> GetSubbedUsers() ;
    Task<bool> DeleteSubscriptionAsync(int subId);

    // Save changes
    Task<bool> SaveChangesAsync();
}