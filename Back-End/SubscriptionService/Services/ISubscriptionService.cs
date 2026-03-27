using SubscriptionService.DTOs;

namespace SubscriptionService.Services;

public interface ISubscriptionService
{
    // Plans
    Task<IEnumerable<SubscriptionPlanDto>> GetAllPlansAsync();
    
    // Subscription operations
    Task<SubscriptionResponse> RegisterSubscriptionAsync(SubscriptionRequest request);
    Task<SubscriptionResponse?> GetUserSubscriptionAsync(Guid userId);
    Task<bool> CancelSubscriptionAsync(int subId);
}