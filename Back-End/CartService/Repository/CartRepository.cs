using CartService.DTOs;
using CartService.Models;
using CartService.Services;
using Microsoft.AspNetCore.Http.HttpResults;

namespace CartService.Repository
{
    public class CartRepository : ICartRepository
    {
        // Connection String For The Database
        private readonly String _connString;
        public CartRepository(IConfiguration conf)
        {
            this._connString = conf.GetConnectionString("DefaultConnection");
        }
        // Get The Entire Cart Through The UserId
        public async Task<Cart> GetUserCart_ThroughID(Guid userId)
        {
            return Ok();
        }
        // Create A Cart For The User
        public async Task CreateCart_ForUser(Guid userId)
        {
            return Ok();
        }
        // Add A Product To The Cart
        public async Task AddItem_ForCart(Guid userId , AddToCartRequest req)
        {
            return Ok();
        }
        // Change The Quantity Of The Selected Cart Product
        public async Task UpdateStock_ForCartItem(Guid userId , UpdateStockRequest req)
        {
            return Ok();
        }
        // Getting Rid Of A Product From The Cart
        public async Task RemoveItem_FromCart(Guid userId , int productId)
        {
            return Ok();
        }
        // Clean The Entire Cart
        public async Task RemoveAll_FromCart(Guid userId)
        {
            return Ok();
        }
    }
}
