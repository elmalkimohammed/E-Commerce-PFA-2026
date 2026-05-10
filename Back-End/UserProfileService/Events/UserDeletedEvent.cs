namespace UserProfileService.Events
{
    public class UserDeletedEvent
    {
        public Guid UserId { get; set; }
        public DateTime DeletedAt { get; set; }
        public string DeletedBy { get; set; } = "system";
        public bool PermanentDelete { get; set; } = true;
    }
}
