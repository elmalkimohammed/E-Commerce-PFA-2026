namespace SubscriptionService.DTOs;

public class SubscriptionResponse
{
    public int SubId { get; set; }
    public Guid UserId { get; set; }
    public int PlanId { get; set; }
    public string PlanName { get; set; } = string.Empty;
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string Status { get; set; } = string.Empty;
    public int MaxProducts { get; set; }
}