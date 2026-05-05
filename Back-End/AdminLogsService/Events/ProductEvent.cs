namespace AdminLogsService.Events
{
    public class ProductEvent
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string Description { get; set; }
        public float Price { get; set; }
        public int Stock { get; set; }
        public string UserId { get; set; }
        public string Category { get; set; }
        public string Action { get; set; }  // "CREATED", "UPDATED", "DELETED"
        public DateTime Timestamp { get; set; }
        public string PerformedBy { get; set; }
    }
}