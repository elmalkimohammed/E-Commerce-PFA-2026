using AuthService.DTOs;

namespace AuthService.Services
{
    public interface IAuthService
    {
        Task RegisterProcess(RegisterRequest request);
        Task<String> LoginProcess(LoginRequest request);
        Task<bool> VerifyEmailExistence(EmailVerificationRequest request);
        Task UpdateOldPassword(PasswordChangeRequest request);
    }
}
