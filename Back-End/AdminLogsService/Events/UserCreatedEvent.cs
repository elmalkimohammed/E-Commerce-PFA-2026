namespace AdminLogsService.Events
{
    // Events/UserCreatedEvent.cs
    namespace AdminLogsService.Events
    {
        public class UserCreatedEvent
        {
            public Guid UserId { get; set; }
            public string Email { get; set; } = string.Empty;
            public string Role { get; set; } = string.Empty;
            public DateTime CreatedAt { get; set; }
        }
    }

    // Events/UserDeletedEvent.cs
    namespace AdminLogsService.Events
    {
        public class UserDeletedEvent
        {
            public Guid UserId { get; set; }
            public DateTime DeletedAt { get; set; }
            public string DeletedBy { get; set; } = string.Empty;
            public bool PermanentDelete { get; set; }
        }
    }
}
