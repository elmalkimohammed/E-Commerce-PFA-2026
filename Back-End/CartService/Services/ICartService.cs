using CartService.DTOs;

namespace CartService.Services
{
    public interface ICartService
    {
        Task<CartResponse.AllCartResponse> GetUser_Cart(Guid userId);   
        Task AddItem_ToCart(Guid userId, AddToCartRequest req);
        Task EditStock_FromCart(Guid userId, UpdateStockRequest req);
        Task DeleteItem_FromCart(Guid userId, int productId);
        Task ClearAll_OfCart(Guid userId);
        
        Task<List<CartResponse.AllCartResponse>> GetAllCartsAsync();
    }
}
