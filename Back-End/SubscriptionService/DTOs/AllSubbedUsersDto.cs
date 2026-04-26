namespace SubscriptionService.DTOs
{
    public class AllSubbedUsersDto
    {
        public int SubId { get; set; }
        public Guid UserId { get; set; }
        public int PlanId { get; set; }
        public string? PlanName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string? Status { get; set; }
        public int MaxProducts { get; set; }
    }
}
