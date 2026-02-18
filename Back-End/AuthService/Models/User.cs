namespace AuthService.Models
{
    public class User
    {
        public Guid UserId { get; set; }
        public String Email { get; set; }
        public String PasswordHash { get; set; }
        public String Role { get; set; } = "Customer"; // Default Value
        public DateTime CreatedAt { get; set; }
    }
}
