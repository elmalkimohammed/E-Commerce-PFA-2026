using Microsoft.AspNetCore.Mvc;
using SubscriptionService.DTOs;
using SubscriptionService.Services;

namespace SubscriptionService.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SubscriptionController : ControllerBase
{
    private readonly ISubscriptionService _subscriptionService;
    private readonly ILogger<SubscriptionController> _logger;
    
    public SubscriptionController(ISubscriptionService subscriptionService, ILogger<SubscriptionController> logger)
    {
        _subscriptionService = subscriptionService;
        _logger = logger;
    }
    
    /// <summary>
    /// Get all available subscription plans
    /// </summary>
    [HttpGet("plans")]
    [ProducesResponseType(typeof(IEnumerable<SubscriptionPlanDto>), StatusCodes.Status200OK)]
    public async Task<IActionResult> GetAllPlans()
    {
        try
        {
            var plans = await _subscriptionService.GetAllPlansAsync();
            return Ok(plans);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error getting all plans");
            return StatusCode(500, new { message = "An error occurred while retrieving plans" });
        }
    }
    
    /// <summary>
    /// Register a new subscription for a user
    /// </summary>
    [HttpPost("register")]
    [ProducesResponseType(typeof(SubscriptionResponse), StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status409Conflict)]
    public async Task<IActionResult> RegisterSubscription([FromBody] SubscriptionRequest request)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            var result = await _subscriptionService.RegisterSubscriptionAsync(request);
            return CreatedAtAction(nameof(GetUserSubscription), new { userId = result.UserId }, result);
        }
        catch (InvalidOperationException ex)
        {
            return Conflict(new { message = ex.Message });
        }
        catch (KeyNotFoundException ex)
        {
            return NotFound(new { message = ex.Message });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error registering subscription for user {UserId}", request.UserId);
            return StatusCode(500, new { message = "An error occurred while registering subscription" });
        }
    }
    
    /// <summary>
    /// Get subscription information for a specific user
    /// </summary>
    [HttpGet("{userId}")]
    [ProducesResponseType(typeof(SubscriptionResponse), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetUserSubscription(Guid userId)
    {
        try
        {
            var subscription = await _subscriptionService.GetUserSubscriptionAsync(userId);
            
            if (subscription == null)
            {
                return NotFound(new { message = $"No active subscription found for user {userId}" });
            }
            
            return Ok(subscription);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error getting subscription for user {UserId}", userId);
            return StatusCode(500, new { message = "An error occurred while retrieving subscription" });
        }
    }
    
    /// <summary>
    /// Cancel a subscription
    /// </summary>
    [HttpDelete("cancel/{subId}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> CancelSubscription(int subId)
    {
        try
        {
            var result = await _subscriptionService.CancelSubscriptionAsync(subId);
            
            if (!result)
            {
                return NotFound(new { message = $"Subscription with ID {subId} not found" });
            }
            
            return Ok(new { message = "Subscription cancelled successfully", subId });
        }
        catch (KeyNotFoundException ex)
        {
            return NotFound(new { message = ex.Message });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error cancelling subscription {SubId}", subId);
            return StatusCode(500, new { message = "An error occurred while cancelling subscription" });
        }
    }
}