using Microsoft.EntityFrameworkCore;
using SubscriptionService.Data;
using SubscriptionService.Models;

namespace SubscriptionService.Repositories;

public class SubscriptionRepository : ISubscriptionRepository
{
    private readonly SubscriptionDbContext _context;
    
    public SubscriptionRepository(SubscriptionDbContext context)
    {
        _context = context;
    }
    
    public async Task<IEnumerable<SubscriptionPlan>> GetAllPlansAsync()
    {
        return await _context.SubscriptionPlans.ToListAsync();
    }
    
    public async Task<SubscriptionPlan?> GetPlanByIdAsync(int planId)
    {
        return await _context.SubscriptionPlans.FindAsync(planId);
    }
    
    public async Task<SubscribedUser?> GetSubscriptionByIdAsync(int subId)
    {
        return await _context.SubscribedUsers
            .Include(s => s.SubscriptionPlan)
            .FirstOrDefaultAsync(s => s.SubId == subId);
    }
    
    public async Task<IEnumerable<SubscribedUser>> GetSubscriptionsByUserIdAsync(Guid userId)
    {
        return await _context.SubscribedUsers
            .Include(s => s.SubscriptionPlan)
            .Where(s => s.UserId == userId)
            .OrderByDescending(s => s.StartDate)
            .ToListAsync();
    }
    
    public async Task<SubscribedUser?> GetActiveSubscriptionByUserIdAsync(Guid userId)
    {
        var today = DateTime.UtcNow.Date;
        return await _context.SubscribedUsers
            .Include(s => s.SubscriptionPlan)
            .Where(s => s.UserId == userId && 
                        s.Status == "Active" && 
                        s.StartDate <= today && 
                        s.EndDate >= today)
            .FirstOrDefaultAsync();
    }
    
    public async Task<SubscribedUser> AddSubscriptionAsync(SubscribedUser subscription)
    {
        await _context.SubscribedUsers.AddAsync(subscription);
        return subscription;
    }
    
    public async Task<bool> UpdateSubscriptionAsync(SubscribedUser subscription)
    {
        _context.SubscribedUsers.Update(subscription);
        return await Task.FromResult(true);
    }
    
    public async Task<bool> CancelSubscriptionAsync(int subId)
    {
        var subscription = await _context.SubscribedUsers.FindAsync(subId);
        if (subscription == null)
        {
            return false;
        }
        
        subscription.Status = "Cancelled";
        _context.SubscribedUsers.Update(subscription);
        return true;
    }
    
    public async Task<bool> SubscriptionExistsAsync(int subId)
    {
        return await _context.SubscribedUsers.AnyAsync(s => s.SubId == subId);
    }
    
    public async Task<bool> UserHasActiveSubscriptionAsync(Guid userId)
    {
        var today = DateTime.UtcNow.Date;
        return await _context.SubscribedUsers
            .AnyAsync(s => s.UserId == userId && 
                          s.Status == "Active" && 
                          s.StartDate <= today && 
                          s.EndDate >= today);
    }
    
    public async Task<bool> SaveChangesAsync()
    {
        return await _context.SaveChangesAsync() > 0;
    }

    public async Task<List<SubscribedUser>> GetSubbedUsers()
    {
        return await this._context.SubscribedUsers.Include( s => s.SubscriptionPlan ).ToListAsync();
    }

    public async Task<bool> DeleteSubscriptionAsync(int subId)
    {
        var chosenSub = await this._context.SubscribedUsers.FindAsync(subId);
        if( chosenSub == null )
        {
            return false; 
        }

        this._context.SubscribedUsers.Remove(chosenSub);
        return true;
    }
}