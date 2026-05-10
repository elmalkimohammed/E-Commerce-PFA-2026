using CartService.DTOs;
using CartService.Services;
using CartService.Events;
using Microsoft.AspNetCore.Authorization;
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
        private readonly ICartService _cartService;
        private readonly CartEventService _cartEventService;

        public CartController(
            ICartService cartService,
            CartEventService cartEventService)
        {
            _cartService = cartService;
            _cartEventService = cartEventService;
        }

        private Guid GetUserId()
        {
            var userIdClaim = User.FindFirst(JwtRegisteredClaimNames.Sub) ?? User.FindFirst(ClaimTypes.NameIdentifier);
            if (userIdClaim == null)
            {
                throw new Exception("The User Id Wasn't Found In The Token!");
            }
            return Guid.Parse(userIdClaim.Value);
        }

        private string GetCurrentUserEmail()
        {
            return User.FindFirst("email")?.Value
                ?? User.FindFirst(ClaimTypes.Email)?.Value
                ?? GetUserId().ToString();
        }

        [HttpGet("getCart")]
        public async Task<IActionResult> GettingFullCart()
        {
            var userId = GetUserId();
            var cart = await _cartService.GetUser_Cart(userId);
            return Ok(cart);
        }

        [HttpPost("addToCart")]
        public async Task<IActionResult> AddingItem(AddToCartRequest request)
        {
            if (request == null || request.Stock <= 0)
            {
                return BadRequest("Invalid Request!");
            }
            
            var userId = GetUserId();
            var performedBy = GetCurrentUserEmail();
            
            await _cartService.AddItem_ToCart(userId, request);
            
            var cart = await _cartService.GetUser_Cart(userId);
            await _cartEventService.PublishCartUpdatedEvent(cart, performedBy);
            
            return Ok(new { message = "Product Added To The Cart Successfully!" });
        }

        [HttpGet("all")]
        [Authorize(Roles = "Admin,Invet")]
        public async Task<IActionResult> GetAllCarts()
        {
            var carts = await _cartService.GetAllCartsAsync();
            return Ok(carts);
        }

        [HttpPut("updateStock")]
        public async Task<IActionResult> UpdateQuantity(UpdateStockRequest request)
        {
            if (request == null)
            {
                return BadRequest("Invalid Request!");
            }
            
            var userId = GetUserId();
            var performedBy = GetCurrentUserEmail();
            
            await _cartService.EditStock_FromCart(userId, request);
            
            var cart = await _cartService.GetUser_Cart(userId);
            await _cartEventService.PublishCartUpdatedEvent(cart, performedBy);
            
            return Ok(new { message = "Quantity Updated Successfully!" });
        }

        [HttpDelete("deleteItem/{productId}")]
        public async Task<IActionResult> DeleteItem(int productId)
        {
            var userId = GetUserId();
            var performedBy = GetCurrentUserEmail();
            
            await _cartService.DeleteItem_FromCart(userId, productId);
            
            var cart = await _cartService.GetUser_Cart(userId);
            await _cartEventService.PublishCartDeletedEvent(cart, performedBy);
            
            return Ok(new { message = "Item Deleted Successfully!" });
        }

        [HttpPost("clearCart")]
        public async Task<IActionResult> ClearCart()
        {
            var userId = GetUserId();
            var performedBy = GetCurrentUserEmail();
            
            await _cartService.ClearAll_OfCart(userId);
            
            var cart = await _cartService.GetUser_Cart(userId);
            await _cartEventService.PublishCartDeletedEvent(cart, performedBy);
            
            return Ok(new { message = "The Cart Has Been Cleared!" });
        }
    }
}