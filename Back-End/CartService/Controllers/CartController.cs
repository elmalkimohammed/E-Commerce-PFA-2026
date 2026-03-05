using CartService.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;


namespace CartService.Controllers
{
    [Route("api/cart")]
    [ApiController]
    [Authorize]
    public class CartController : ControllerBase
    {
        // Dependency injection of the cart service
        private readonly ICartService _cartService;
        public CartController(ICartService cartService)
        {
            this._cartService = cartService;
        }
        private Guid GetUserId()
        {
            // Gathering The UserId From The JWT Token
            var userIdClaim = User.FindFirst( JwtRegisteredClaimNames.Sub ) ?? User.FindFirst( ClaimTypes.NameIdentifier ) ;
            if ( userIdClaim == null)
            {
                throw new Exception("The User Id Wasn't Found In The Token!");
            } else
            {
                return Guid.Parse(userIdClaim.Value);
            }
        }
        [HttpGet("getCart")]
        [HttpPost("addToCart")]
        [HttpPut("updateStock")]
        [HttpDelete("deleteItem")]
        [HttpPost("clearCart")]
    }
}
