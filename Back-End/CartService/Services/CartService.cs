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
            // Check If The Product Exists In The Database
            var dbExistenceTest = await this._productClient.ProductExistance_Verification(req.ProductId);
            if (!dbExistenceTest)
            {
                throw new Exception("The Product Doesn't Exist In The Database");
            }
            // Gathering The Cart for the user, if it doesn't exist, create a new cart for them
            var cart = await this._cartRepository.GetUserCart_ThroughID(userId) ?? await this._cartRepository.CreateCart_ForUser(userId);
            // Getting The Maximum Stock Of The Product From The Product Service For Verification Purposes
            var maxStock = await this._productClient.GetProductStock(req.ProductId);
            // Checking If The Item already exists in the cart And If it does, update the stock, otherwise add a new item to the cart
            var existingItem = cart.Items.FirstOrDefault( i => i.ProductId == req.ProductId );
            if ( existingItem == null)
            {
                // If The Stock To Be Added Is Greater Than The Maximum Stock, Throw An Exception
                if (req.Stock > maxStock)
                {
                    throw new Exception("Your Adding A Product With A Higher Quantity Than Expected...");
                }
                await this._cartRepository.AddItem_ForCart(cart.CartId, req);
            } else
            {
                throw new Exception("The Product Already Exists In The Cart!");
            }
        }
        public async Task<List<CartResponse.AllCartResponse>> GetAllCartsAsync()
        {
            // Récupérer tous les paniers depuis le repository
            var allCarts = await _cartRepository.GetAllCartsAsync();
            
            // Si aucun panier n'existe, retourner une liste vide
            if (allCarts == null || !allCarts.Any())
            {
                return new List<CartResponse.AllCartResponse>();
            }
            
            // Mapper chaque panier vers le DTO de réponse
            return allCarts.Select(cart => new CartResponse.AllCartResponse
            {
                CartId = cart.CartId,
                UserId = cart.UserId,
                Items = cart.Items?.Select(item => new CartResponse.CartItemDto
                {
                    ProductId = item.ProductId,
                    Stock = item.Stock
                }).ToList() ?? new List<CartResponse.CartItemDto>()
            }).ToList();
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
            // Gathering The Cart for the user And If The Cart is null, exit
            var cart = await this._cartRepository.GetUserCart_ThroughID(userId);
            if ( cart == null)
            {
                return;
            }
            // Calling The Cart Repository To Remove The Item From The Cart If The Stock Is Less Than Or Equal Than 0
            if ( req.Stock <=0)
            {
                await this._cartRepository.RemoveItem_FromCart(cart.CartId, req.ProductId);
            } else
            {
                await this._cartRepository.UpdateStock_ForCartItem(cart.CartId, req);
            }
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
