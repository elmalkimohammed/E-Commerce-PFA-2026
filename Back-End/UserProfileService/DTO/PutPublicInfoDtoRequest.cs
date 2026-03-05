using System.ComponentModel.DataAnnotations;
using UserProfileService.Enums;

namespace UserProfileService.DTO
{
    public class PutPublicInfoDtoRequest
    {
        [Required]
        public Guid UserId { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Phone { get; set; }
        public string? Address { get; set; }
        public Sex? Sex { get; set; }
        [DataType(DataType.Date)]
        public DateTime? DateOfBirth { get; set; }
        public string? ProfileImage { get; set; }
    }
}
