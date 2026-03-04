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
            // Gathering The Cart for the user, if it doesn't exist, create a new cart for them
            var cart = await this._cartRepository.GetUserCart_ThroughID(userId) ?? await this._cartRepository.CreateCart_ForUser(userId);
            // Checking If The Item already exists in the cart And If it does, update the stock, otherwise add a new item to the cart
            var existingItem = cart.Items.FirstOrDefault( i => i.ProductId == req.ProductId );
            if ( existingItem != null)
            {
                // Mapping To UpdateStockRequest DTO And Calling The Cart Repository To Update The Stock For The Existing Item
                UpdateStockRequest newUpdReq = new UpdateStockRequest
                {
                    ProductId = req.ProductId,
                    Stock = existingItem.Stock + req.Stock
                };
                await this._cartRepository.UpdateStock_ForCartItem(cart.CartId, newUpdReq );
            } else
            {
                await this._cartRepository.AddItem_ForCart(cart.CartId, req);
            }
        }

        public async Task ClearAll_OfCart(Guid userId)
        {
            // Gathering The Cart for the user
            var cart = await this._cartRepository.GetUserCart_ThroughID(userId);
            if ( cart == null)
            {
                return;
            }
            // Calling The Cart Repository To Clear All Items From The Cart
            await this._cartRepository.RemoveAll_FromCart(cart.CartId);
        }

        public async Task DeleteItem_FromCart(Guid userId, int productId)
        {
            // Gathering The Cart for the user And If The Cart is null, exit
            var cart = await this._cartRepository.GetUserCart_ThroughID(userId);
            if ( cart == null)
            {
                return;
            }
            // Calling The Cart Repository To Remove The Item From The Cart
            await this._cartRepository.RemoveItem_FromCart(cart.CartId, productId);
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
            // Map the cart to the CartResponse DTO And Return it
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
