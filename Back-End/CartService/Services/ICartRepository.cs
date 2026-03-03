using CartService.DTOs;
using CartService.Models;
namespace CartService.Services
{
    public interface ICartRepository
    {
        Task<Cart> GetUserCart_ThroughID(Guid userId);
        Task CreateCart_ForUser(Guid userId);
        Task AddItem_ForCart(Guid userId, AddToCartRequest re);
        Task UpdateStock_ForCartItem(Guid userId, UpdateStockRequest req);
        Task RemoveItem_FromCart(Guid userId, Guid productId);
        Task RemoveAll_FromCart(Guid userId);
    }
}
