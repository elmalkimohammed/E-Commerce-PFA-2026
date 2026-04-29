using CartService.DTOs;
using CartService.Models;
namespace CartService.Services
{
    public interface ICartRepository
    {
        Task<Cart> GetUserCart_ThroughID(Guid userId);
        Task<Cart> CreateCart_ForUser(Guid userId);
        Task AddItem_ForCart(Guid cartId, AddToCartRequest re);
        Task UpdateStock_ForCartItem(Guid cartId, UpdateStockRequest req);  
        Task RemoveItem_FromCart(Guid cartId, int productId);   
        Task RemoveAll_FromCart(Guid cartId);   
        Task<List<Cart>> GetAllCartsAsync();
    }
}
