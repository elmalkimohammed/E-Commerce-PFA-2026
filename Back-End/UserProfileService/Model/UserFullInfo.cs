using UserProfileService.Enums;

namespace UserProfileService.Model
{
    public class UserFullInfo
    {
        public Guid UserId { get; set; }
        public string? FirstName { get; set; } = "user";
        public string? LastName { get; set; } = "Default";
        public string? Phone { get; set; }
        public string? Address { get; set; }
        public Sex? Sex { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string? ProfileImage { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
