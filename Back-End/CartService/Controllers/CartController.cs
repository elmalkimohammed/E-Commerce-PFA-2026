using CartService.DTOs;
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
            // Extracting The UserId From The JWT Token
            var userIdClaim = User.FindFirst( JwtRegisteredClaimNames.Sub ) ?? User.FindFirst( ClaimTypes.NameIdentifier ) ;
            if ( userIdClaim == null)
            {
                throw new Exception("The User Id Wasn't Found In The Token!");
            } else
            {
                // Converting The Given UserId Into A Proper GUID Structure
                return Guid.Parse(userIdClaim.Value);
            }
        }
        [HttpGet("getCart")]
        public async Task<IActionResult> GettingFullCart()
        {
            var userId = this.GetUserId();
            var cart = await this._cartService.GetUser_Cart(userId);
            return Ok(cart);
        }
        [HttpPost("addToCart")]
        public async Task<IActionResult> AddingItem(AddToCartRequest request)
        {
            if ( request == null || request.Stock <= 0)
            {
                return BadRequest("Invalid Request!");
            }
            var userId = this.GetUserId();
            await this._cartService.AddItem_ToCart(userId, request);
            return Ok( new { message = "Product Added To The Cart Successfully!" } );
        }
        [HttpGet("all")]
        [AllowAnonymous] // or keep [Authorize] with admin role
        public async Task<IActionResult> GetAllCarts()
        {
            var carts = await _cartService.GetAllCartsAsync();
            return Ok(carts);
        }
        [HttpPut("updateStock")]
        public async Task<IActionResult> UpdateQuantity(UpdateStockRequest request)
        {
            if ( request == null)
            {
                return BadRequest("Invalid Request!");
            }
            var userId = this.GetUserId();
            await this._cartService.EditStock_FromCart(userId, request);
            return Ok( new { message = "Quantity Updated Successfully!" } );
        }
        [HttpDelete("deleteItem/{productId}")]
        public async Task<IActionResult> DeleteItem(int productId)
        {
            var userId = this.GetUserId();
            await this._cartService.DeleteItem_FromCart(userId, productId);
            return Ok( new { message = "Item Deleted Successfully!" } );
        }
        [HttpPost("clearCart")]
        public async Task<IActionResult> ClearCart()
        {
            var userId = this.GetUserId();
            await this._cartService.ClearAll_OfCart(userId);
            return Ok( new { message = "The Cart Has Been Cleared!" } );
        }
    }
}
