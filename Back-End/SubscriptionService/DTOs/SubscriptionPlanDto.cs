namespace SubscriptionService.DTOs;

public class SubscriptionPlanDto
{
    public int PlanId { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public string Duration { get; set; } = string.Empty;
    public int MaxProducts { get; set; }
}