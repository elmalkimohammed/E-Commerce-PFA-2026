using System.ComponentModel.DataAnnotations;

namespace AuthService.DTOs
{
    public class RegisterRequest
    {
        [Required]
        [EmailAddress]
        public String Email { get; set; }
        [Required]
        public String Password { get; set; }
        [Required]
        [Compare("Password", ErrorMessage = "Le mot de pass est ne pas le meme")]
        public String ConfirmPassword { get; set; }
    }
}
