using AuthService.DTOs;
using AuthService.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AuthService.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        // Dependency injection of the authentication service
        private readonly IAuthService _authService;
        public AuthController(IAuthService authService)
        {
            this._authService = authService;
        }

        // The Login EndPoint
        [HttpPost("login")]
        [AllowAnonymous] /* Authorize Non-Authentified Users */
        public async Task<IActionResult> Login(LoginRequest request)
        {
            // Validating the incoming request
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // 400 Status Code
            }

            // Handling The login process and catching any exceptions that may occur
            try
            {
                var response = await this._authService.LoginProcess(request);
                return Ok(response); // 200 Status Code
            }
            catch (Exception e)
            {
                return BadRequest(e.Message); // 400 Status Code
            }
        }

        // The Register EndPoint
        [HttpPost("register")]
        [AllowAnonymous] /* Authorize Non-Authentified Users */
        public async Task<IActionResult> Register(RegisterRequest request)
        {
            // Validating the incoming request
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // 400 Status Code
            }

            // Handling The registration process and catching any exceptions that may occur
            try
            {
                await this._authService.RegisterProcess(request);
                return Created(); // 201 Status Code
            }
            catch (Exception e)
            {
                return BadRequest(e.Message); // 400 Status Code
            }
        }

        // Verifying Email EndPoint
        [HttpGet("forgot-password/verify-email")]
        [AllowAnonymous] /* Authorize Non-Authentified Users */
        public async Task<IActionResult> VerifyEmail(EmailVerificationRequest request)
        {
            // Validating the incoming request
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // 400 Status Code
            }

            // Handling The email verification process and catching any exceptions that may occur
            try
            {
                var resetToken = await this._authService.VerifyEmailExistence(request);
                return Ok(new { resetToken }); // 200 Status Code
            }
            catch (Exception e)
            {
                return BadRequest(e.Message); // 400 Status Code
            }
        }

        // Reseting The Password EndPoint
        [HttpPost("forgot-password/reset")]
        [AllowAnonymous] /* Authorize Non-Authentified Users */
        public async Task<IActionResult> ResetPassword(PasswordChangeRequest request)
        {
            // Validating the incoming request
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // 400 Status Code
            }

            // Handling The password reset process and catching any exceptions that may occur
            try
            {
                await this._authService.UpdateOldPassword(request);
                return Ok(); // 200 Status Code
            }
            catch (Exception e)
            {
                return BadRequest(e.Message); // 400 Status Code
            }
        }
    }
}
