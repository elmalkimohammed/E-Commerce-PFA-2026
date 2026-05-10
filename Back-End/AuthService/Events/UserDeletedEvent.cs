namespace AuthService.Events
{
    public class UserDeletedEvent
    {
        public Guid UserId { get; set; }
        public DateTime DeletedAt { get; set; }
        public string DeletedBy { get; set; } = "system"; // Could be admin or user themselves
        public bool PermanentDelete { get; set; } = true;
    }
}
