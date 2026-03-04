using CartService.DTOs;

namespace CartService.Services
{
    public class CartService : ICartService
    {
        private readonly ICartRepository _cartRepository;
        private readonly IProductClient _productClient;
        public CartService(ICartRepository cartRepository, IProductClient productClient)
        {
            this._cartRepository = cartRepository;
            _productClient = productClient;
        }
        public async Task AddItem_ToCart(Guid userId, AddToCartRequest req)
        {
            throw new NotImplementedException();
        }

        public async Task ClearAll_OfCart(Guid userId)
        {
            throw new NotImplementedException();
        }

        public async Task DeleteItem_FromCart(Guid userId, int productId)
        {
            throw new NotImplementedException();
        }

        public async Task EditStock_FromCart(Guid userId, UpdateStockRequest req)
        {
            throw new NotImplementedException();
        }

        public async Task<CartResponse.AllCartResponse> GetUser_Cart(Guid userId)
        {
            // Call The Cart Repository to get the cart for the user
            var cart = await this._cartRepository.GetUserCart_ThroughID(userId);
            // If the cart is null, create a new cart for the user
            if (cart == null)
            {
                await this._cartRepository.CreateCart_ForUser(userId);
            }
            // Map the cart to the CartResponse DTO
            return new CartResponse.AllCartResponse
            {
                CartId = cart.CartId,
                UserId = cart.UserId,
                Items = cart.Items.Select( e => new CartResponse.CartItemDto
                {
                    ProductId = e.ProductId,
                    Stock = e.Stock
                }).ToList()
            };
        }
    }
}
