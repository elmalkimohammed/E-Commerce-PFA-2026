using BCrypt.Net;
namespace UserProfileService.Services
{
    public static  class PasswordHash
    {
        public static string PasswwordHasher(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }
    }
}
