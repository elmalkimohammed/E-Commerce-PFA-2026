using AuthService.DTOs;
using AuthService.Helpers;
using AuthService.Repository;
using Microsoft.AspNetCore.Http.HttpResults;

namespace AuthService.Services
{
    public class AuthService : IAuthService
    {
        // Dependency Injection For The User Repository And JWT Generator
        private readonly IUserRepository _userRepository;
        private readonly JwtGenerator _jwtGenerator;
        public AuthService(IUserRepository userRepository, JwtGenerator jwtGenerator)
        {
            this._userRepository = userRepository;
            this._jwtGenerator = jwtGenerator;
        }

        // The Method That Handles The Login Process
        public async Task<string> LoginProcess(LoginRequest request)
        {
            // Search In The Database For A User With The Given Email
            var user = await this._userRepository.GetThroughEmail(request.Email) ;

            // Verify If The User Exists And If The Given Password Matches The Stored Password Hash
            if( user == null )
            {
                throw new Exception("User Not Found");
            }
            var validPassword = PasswordHasher.VerifyPassword(request.Password, user.PasswordHash);
            if ( !validPassword)
            {
                throw new Exception("Invalid Password");
            }

            // Token Generation
            var token = this._jwtGenerator.GenerateToken(user);

            // Returning The Generated Token
            return token;
        }

        // The Method That Handles The Register Process
        public Task RegisterProcess(RegisterRequest request)
        {
            throw new NotImplementedException();
        }

        // The Method That Handles The Email Existence Verification Process
        public Task VerifyEmailExistence(EmailVerificationRequest request)
        {
            throw new NotImplementedException();
        }

        // The Method That Handles Updating The Old Password According To The Given New Password
        public Task UpdateOldPassword(PasswordChangeRequest request)
        {
            throw new NotImplementedException();
        }
    }
}
