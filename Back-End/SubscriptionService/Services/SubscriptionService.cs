using Microsoft.EntityFrameworkCore;
using SubscriptionService.DTOs;
using SubscriptionService.Models;
using SubscriptionService.Repositories;

namespace SubscriptionService.Services;

public class subscriptionService : ISubscriptionService
{
    private readonly ISubscriptionRepository _repository;
    
    public subscriptionService(ISubscriptionRepository repository)
    {
        _repository = repository;
    }
    
    public async Task<IEnumerable<SubscriptionPlanDto>> GetAllPlansAsync()
    {
        var plans = await _repository.GetAllPlansAsync();
        
        return plans.Select(p => new SubscriptionPlanDto
        {
            PlanId = p.PlanId,
            Name = p.Name,
            Price = p.Price,
            Duration = p.Duration,
            MaxProducts = p.MaxProducts
        });
    }
    
    public async Task<SubscriptionResponse> RegisterSubscriptionAsync(SubscriptionRequest request)
    {
        // Check if user already has an active subscription
        var hasActive = await _repository.UserHasActiveSubscriptionAsync(request.UserId);
        if (hasActive)
        {
            throw new InvalidOperationException("User already has an active subscription");
        }
        
        // Get the plan
        var plan = await _repository.GetPlanByIdAsync(request.PlanId);
        if (plan == null)
        {
            throw new KeyNotFoundException($"Plan with ID {request.PlanId} not found");
        }
        
        // Calculate dates
        var startDate = DateTime.UtcNow.Date;
        var endDate = CalculateEndDate(startDate, plan.Duration);
        
        // Create subscription
        var subscription = new SubscribedUser
        {
            UserId = request.UserId,
            PlanId = request.PlanId,
            StartDate = startDate,
            EndDate = endDate,
            Status = "Active"
        };
        
        var created = await _repository.AddSubscriptionAsync(subscription);
        await _repository.SaveChangesAsync();
        
        return new SubscriptionResponse
        {
            SubId = created.SubId,
            UserId = created.UserId,
            PlanId = created.PlanId,
            PlanName = plan.Name,
            StartDate = created.StartDate,
            EndDate = created.EndDate,
            Status = created.Status,
            MaxProducts = plan.MaxProducts
        };
    }
    
    public async Task<SubscriptionResponse?> GetUserSubscriptionAsync(Guid userId)
    {
        var subscription = await _repository.GetActiveSubscriptionByUserIdAsync(userId);
        
        if (subscription == null)
        {
            return null;
        }
        
        return new SubscriptionResponse
        {
            SubId = subscription.SubId,
            UserId = subscription.UserId,
            PlanId = subscription.PlanId,
            PlanName = subscription.SubscriptionPlan?.Name ?? "Unknown",
            StartDate = subscription.StartDate,
            EndDate = subscription.EndDate,
            Status = subscription.Status,
            MaxProducts = subscription.SubscriptionPlan?.MaxProducts ?? 0
        };
    }
    
    public async Task<bool> CancelSubscriptionAsync(int subId)
    {
        var exists = await _repository.SubscriptionExistsAsync(subId);
        if (!exists)
        {
            throw new KeyNotFoundException($"Subscription with ID {subId} not found");
        }
        
        var result = await _repository.CancelSubscriptionAsync(subId);
        await _repository.SaveChangesAsync();
        
        return result;
    }
    
    private DateTime CalculateEndDate(DateTime startDate, string duration)
    {
        return duration.ToLower() switch
        {
            "30days" => startDate.AddDays(30),
            "90days" => startDate.AddDays(90),
            "365days" => startDate.AddDays(365),
            _ => startDate.AddDays(30) // Default to 30 days
        };
    }
}