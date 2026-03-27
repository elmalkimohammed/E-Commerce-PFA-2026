using System.ComponentModel.DataAnnotations;

namespace SubscriptionService.DTOs;

public class SubscriptionRequest
{
    [Required]
    public Guid UserId { get; set; }
    
    [Required]
    [Range(1, 3, ErrorMessage = "PlanId must be 1 (Basic), 2 (Premium), or 3 (Entreprise)")]
    public int PlanId { get; set; }
}