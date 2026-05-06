using AuthService.DTOs;
using AuthService.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Org.BouncyCastle.Asn1.Ocsp;

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
        public async Task<IActionResult> VerifyEmail([FromQuery] EmailVerificationRequest request)
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

        // Checking The Existance Of The UserId
        [HttpGet("verify-userId/{userId}")]
        public async Task<IActionResult> UserIdVerification(Guid userId)
        {
            // Validating The Incoming Request
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // 400 Status Code
            }

            // Processing If The Given Id Is Truly On Our Database
            try
            {
                var exists = await this._authService.UserId_Existance(userId);
                if (!exists) return NotFound(new { message = "UserId Not Found!" }); // 404 Status Code
                return Ok(); // 200 Status Code
            }
            catch (Exception e)
            {
                return BadRequest(e.Message); // 400 Status Code
            }
        }

        [HttpDelete("deleteUser/{userId}")]
        public async Task<IActionResult> UserDeletion(Guid userId)
        {
            try
            {
                await this._authService.UserDeletion(userId);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest($"Unable to delete user {userId}");
            }
        }

        [HttpPost("adminCreateUser")]
        public async Task<IActionResult> UserCreationAdminSide(FullNewUser user)
        {
            // Validating the incoming request
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // 400 Status Code
            }

            // Handling The registration process and catching any exceptions that may occur
            try
            {
                await this._authService.FullyCreateUser(user);
                return Created(); // 201 Status Code
            }
            catch (Exception e)
            {
                return BadRequest(e.Message); // 400 Status Code
            }
        }

        // Token validation for Nginx auth_request
        [HttpGet("validate")]
        [AllowAnonymous] // Allow guests to proceed, but identify users if token is present
        public IActionResult ValidateToken()
        {
            // If the user is authenticated (valid JWT provided), extract and return claims
            if (User.Identity?.IsAuthenticated == true)
            {
                var userId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value 
                             ?? User.FindFirst("sub")?.Value;
                var userEmail = User.FindFirst(System.Security.Claims.ClaimTypes.Email)?.Value 
                             ?? User.FindFirst("email")?.Value;
                var userRole = User.FindFirst(System.Security.Claims.ClaimTypes.Role)?.Value;

                if (!string.IsNullOrEmpty(userId)) Response.Headers.Append("X-User-Id", userId);
                if (!string.IsNullOrEmpty(userEmail)) Response.Headers.Append("X-User-Email", userEmail);
                if (!string.IsNullOrEmpty(userRole)) Response.Headers.Append("X-User-Role", userRole);
                
                return Ok(); // 200 OK with headers
            }

            // For non-authenticated users, we still return 200 OK so Nginx allows the request to reach backends
            // The backends will simply see no X-User headers and treat the request as anonymous
            return Ok(); 
        }
    }
}
