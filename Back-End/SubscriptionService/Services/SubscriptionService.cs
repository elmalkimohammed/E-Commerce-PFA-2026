using Microsoft.EntityFrameworkCore;
using SubscriptionService.DTOs;
using SubscriptionService.Models;
using SubscriptionService.Repositories;

namespace SubscriptionService.Services;

public class subscriptionService : ISubscriptionService
{
    private readonly ISubscriptionRepository _repository;
    private readonly IAuthClient _authClient;
    
    public subscriptionService(ISubscriptionRepository repository, IAuthClient authClient)
    {
        _repository = repository;
        _authClient = authClient;
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
        // Check if the user id is in our 'authentification' database 
        bool userExists = await this._authClient.userExistance_Verification(request.UserId);
        if ( !userExists)
        {
            throw new KeyNotFoundException("The Given UserId Is Not Correct....");
        }


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
    public async Task<List<AllSubbedUsersDto>> GetAllSubbedUsrs()
    {
        var subbed = await _repository.GetSubbedUsers();

        if (subbed == null || !subbed.Any())
        {
            return new List<AllSubbedUsersDto>();
        }

        return subbed.Select(s => new AllSubbedUsersDto
        {
            SubId = s.SubId,
            UserId = s.UserId,
            PlanId = s.PlanId,
            PlanName = s.SubscriptionPlan?.Name,
            StartDate = s.StartDate,
            EndDate = s.EndDate,
            Status = s.Status,
            MaxProducts = s.SubscriptionPlan?.MaxProducts ?? 0
        }).ToList();
    }
    public async Task<bool> DeleteSubscriptionAsync(int subId)
    {
        var exists = await _repository.SubscriptionExistsAsync(subId);
        if (!exists)
        {
            throw new KeyNotFoundException($"Subscription with ID {subId} not found");
        }

        var result = await _repository.DeleteSubscriptionAsync(subId);
        await _repository.SaveChangesAsync();

        return result;
    }
}