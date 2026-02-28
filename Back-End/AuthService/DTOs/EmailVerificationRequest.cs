using System.ComponentModel.DataAnnotations;

namespace AuthService.DTOs
{
    public class EmailVerificationRequest
    {
        [Required]
        [EmailAddress]
        public String Email { get; set; }
    }
}
