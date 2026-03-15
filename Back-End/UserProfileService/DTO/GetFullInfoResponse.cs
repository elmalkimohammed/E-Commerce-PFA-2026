using UserProfileService.Enums;

namespace UserProfileService.DTO
{
    public class GetFullInfoResponse
    {
        public Guid UserId { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Phone { get; set; }
        public string? Address { get; set; }
        public Sex? Sex { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string? ProfileImage { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
