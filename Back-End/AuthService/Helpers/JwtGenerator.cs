using AuthService.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AuthService.Helpers
{
    public class JwtGenerator
    {
        private readonly IConfiguration _configuration;
        public JwtGenerator(IConfiguration configuration)
        {
            this._configuration = configuration;
        }

        public String GenerateToken(User user)
        {
            // Store The Configuration Of The JwtSettings In The 'appsettings.json File'
            var JwtSettings = this._configuration.GetSection("JwtSettings");

            // Define Multiples Variables For The Keys Of The Object 'JwtSettings'
            var secretKey = JwtSettings["SecretKey"];
            var issuer = JwtSettings["Issuer"];
            var audience = JwtSettings["Audience"];
            var expiryMinutes = int.Parse(JwtSettings["ExpiryMinutes"]!);

            var key = new SymmetricSecurityKey
            (
                Encoding.UTF8.GetBytes(secretKey!)
            );

            var credentials = new SigningCredentials
            (
                key,
                SecurityAlgorithms.HmacSha256
            );

            // Define The Data Inside The Token
            var claims = new[]
            {
                new Claim( JwtRegisteredClaimNames.Sub, user.UserId.ToString() ),
                new Claim( JwtRegisteredClaimNames.Email, user.Email ),
                new Claim( ClaimTypes.Role, user.Role ),
                new Claim( JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString() )
            };

            // Generate Our Token
            var token = new JwtSecurityToken
            (
                issuer: issuer,
                audience: audience,
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(expiryMinutes),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
