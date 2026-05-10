using System.ComponentModel.DataAnnotations;

namespace AuthService.DTOs
{
    public class FullNewUser
    {
        [Required]
        [EmailAddress]
        public String Email { get; set; }
        [Required]
        public String Password { get; set; }
        [Required]
        public String Role { get; set; }
    }
}
