namespace OrderService.Events
{
    public class OrderEvent
    {
        public Guid OrderId { get; set; }
        public Guid UserId { get; set; }
        public string? Status { get; set; }        // Added ?
        public string? Action { get; set; }        // Added ?
        public DateTime Timestamp { get; set; }
        public string? PerformedBy { get; set; }   // Added ?
    }
}