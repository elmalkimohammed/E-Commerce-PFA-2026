using System.ComponentModel.DataAnnotations;

namespace AuthService.DTOs
{
    public class PasswordChangeRequest
    {
        [Required]
        public String NewPassword { get; set; }
    }
}
