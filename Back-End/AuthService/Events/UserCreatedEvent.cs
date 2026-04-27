namespace AuthService.Events
{
    public class UserCreatedEvent
    {
        public Guid UserId { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public DateTime RegisteredAt { get; set; }
    }
}
