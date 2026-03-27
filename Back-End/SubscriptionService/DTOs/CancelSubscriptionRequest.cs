using System.ComponentModel.DataAnnotations;

namespace SubscriptionService.DTOs;

public class CancelSubscriptionRequest
{
    [Required]
    public int SubId { get; set; }
}