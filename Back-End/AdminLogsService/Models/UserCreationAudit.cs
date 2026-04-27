namespace AdminLogsService.Models
{
    public class UserCreationAudit
    {
        public Guid UserId { get; set; }
        public string Email { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public string Status { get; set; } = "Active"; // Active, Deleted
        public DateTime? DeletedAt { get; set; }
        public string? DeletedBy { get; set; }
        public Dictionary<string, object> Metadata { get; set; } = new();
    }
}
