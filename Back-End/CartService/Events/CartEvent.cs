namespace CartService.Events
{
    public class CartEvent
    {
        public Guid CartId { get; set; }
        public Guid UserId { get; set; }
        public int ItemsCount { get; set; }
        public decimal TotalAmount { get; set; }
        public string? Action { get; set; }
        public DateTime Timestamp { get; set; }
        public string? PerformedBy { get; set; }
    }
}