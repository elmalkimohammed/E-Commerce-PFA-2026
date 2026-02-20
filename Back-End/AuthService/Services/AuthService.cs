using AuthService.DTOs;
using AuthService.Helpers;
using AuthService.Models;
using AuthService.Repository;
using Microsoft.AspNetCore.Http.HttpResults;

namespace AuthService.Services
{
    public class AuthService : IAuthService
    {
        // In-Memory Tokens Store
        private static readonly Dictionary<String, (Guid UserId, DateTime Expiry)> _resetToken = new();

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
        public async Task RegisterProcess(RegisterRequest request)
        {
            // Verify If The User Already Exists
            var existingUser = await this._userRepository.GetThroughEmail(request.Email) ;
            if ( existingUser != null)
            {
                throw new Exception("User Already Exists");
            }

            // Hashing The Given Password
            var hashedPassword = PasswordHasher.HashPassword(request.Password) ;

            // Creating A New User Entity And Saving It To The Database
            var newUser = new User
            {
                UserId = Guid.NewGuid(),
                Email = request.Email,
                PasswordHash = hashedPassword,
                Role = "Customer",
                CreatedAt = DateTime.UtcNow
            };
            await this._userRepository.CreateUser(newUser);
        }

        // The Method That Handles The Email Existence Verification Process
        public async Task<String> VerifyEmailExistence(EmailVerificationRequest request)
        {
            // Verify If The Email Actually Exists In The Database
            var verifiedEmail = await this._userRepository.GetThroughEmail(request.Email) ;
            if ( verifiedEmail == null)
            {
                throw new Exception("Email Not Found");
            }

            // Generate A Token And Store It In-Memory For 15 Minutes
            var resetToken = Guid.NewGuid().ToString() ;
            _resetToken[resetToken] = ( verifiedEmail.UserId, DateTime.UtcNow.AddMinutes(15) );

            // Returning The Temporary Token If The Email Exists
            return resetToken;
        }

        // The Method That Handles Updating The Old Password According To The Given New Password
        public async Task UpdateOldPassword(PasswordChangeRequest request)
        {
            // Validating The Token Existence And Expiry
            if ( !_resetToken.TryGetValue(request.resetToken, out var entry))
            {
                throw new Exception("Invalid Token");
            }
            if ( entry.Expiry < DateTime.UtcNow)
            {
                _resetToken.Remove(request.resetToken);
                throw new Exception("Token Expired");
            }

            // Hashing The Given New Password
            var hashedPassword = PasswordHasher.HashPassword(request.NewPassword) ;

            // Updating The User's Password In The Database
            await this._userRepository.UpdateForgottenPassword(entry.UserId, hashedPassword);

            // Removing The Used Token From The In-Memory Store
            _resetToken.Remove(request.resetToken);
        }
    }
}
