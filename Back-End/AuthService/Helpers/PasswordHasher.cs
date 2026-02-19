using BCrypt.Net;
namespace AuthService.Helpers
{
    public static class PasswordHasher
    {
        // The Method Responsable For Hashing A Given Password
        public static String HashPassword(String password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }

        // The Method Responsable For Verifying A Given Password With Its Hashed Version
        public static bool VerifyPassword(String password, String hashedPassword)
        {
            return BCrypt.Net.BCrypt.Verify(password, hashedPassword);
        }
    }
}
