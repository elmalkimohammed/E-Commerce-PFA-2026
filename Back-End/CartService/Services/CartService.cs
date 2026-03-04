using CartService.DTOs;

namespace CartService.Services
{
    public class CartService : ICartService
    {
        public Task AddItem_ToCart(Guid userId, AddToCartRequest req)
        {
            throw new NotImplementedException();
        }

        public Task ClearAll_OfCart(Guid userId)
        {
            throw new NotImplementedException();
        }

        public Task DeleteItem_FromCart(Guid userId, int productId)
        {
            throw new NotImplementedException();
        }

        public Task EditStock_FromCart(Guid userId, UpdateStockRequest req)
        {
            throw new NotImplementedException();
        }

        public Task<CartResponse> GetUser_Cart(Guid userId)
        {
            throw new NotImplementedException();
        }
    }
}
