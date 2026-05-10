namespace AdminLogsService.Models
{
    public class UserRegistrationAudit
    {
        public Guid UserId { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public DateTime RegisteredAt { get; set; }
        public string RegisteredFrom { get; set; } // IP, service, etc.
        public string Status { get; set; } // Active, Deleted, etc.
        public DateTime? DeletedAt { get; set; }
        public string? DeletedBy { get; set; }
        public Dictionary<string, object> Metadata { get; set; }
    }

    public class UserRegisteredEvent
    {
        public Guid UserId { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public DateTime RegisteredAt { get; set; }
    }

    public class UserDeletedEvent
    {
        public Guid UserId { get; set; }
        public DateTime DeletedAt { get; set; }
        public string DeletedBy { get; set; }
    }
}
