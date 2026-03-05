using System.Runtime.CompilerServices;

namespace UserProfileService.Model
{
    public class UserProfilePrivateInfo
    {
        public Guid UserId { get; set; }
        public string Email { get; set; }
        public string password { get; set; } 
    }
}
