namespace AdminLogsService.Events
{
    public class OrderEvent
    {
        public Guid OrderId { get; set; }
        public Guid UserId { get; set; }
        public string Status { get; set; }
        public string Action { get; set; }  // "CREATED", "UPDATED", "CANCELLED"
        public DateTime Timestamp { get; set; }
        public string PerformedBy { get; set; }
    }
}