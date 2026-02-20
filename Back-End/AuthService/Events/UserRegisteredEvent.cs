namespace AuthService.Events
{
    public class UserRegisteredEvent
    {
        public Guid UserId { get; set; }
        public String Email { get; set; }
        public String Role { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
