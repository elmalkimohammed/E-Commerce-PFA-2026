using CartService.DTOs;
using CartService.Models;
using CartService.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using MySql.Data.MySqlClient;

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
            // Initializing The Connection To The Database
            using var conn = new MySqlConnection(this._connString);
            await conn.OpenAsync();
            // MySql Querry Against Sql Injection Attack For Getting The Specific Cart Of The User
            var cmdCart = new MySqlCommand("SELECT * FROM Carts WHERE UserId = @userId", conn);
            cmdCart.Parameters.AddWithValue("@userId", userId.ToString());
            // Executing The Querry And Return A Null Value When Failing
            using var reader = await cmdCart.ExecuteReaderAsync();
            if ( !reader.HasRows)
            {
                return null;
            }
            await reader.ReadAsync();
            // Converting Incomming Data Into Processable DataTypes
            var cart = new Cart
            {
                CartId = Guid.Parse(reader["CartId"].ToString()!),
                UserId = Guid.Parse(reader["UserId"].ToString()!),
                CreatedAt = Convert.ToDateTime(reader["CreatedAt"]),
                Items = new List<CartItem>()
            };
            reader.Close();
            // MySql Querry Against The Sql Injection Attack For Getting The Items Of The Cart
            var cmdItems = new MySqlCommand("SELECT * FROM CartItems WHERE  CartId = @cartId", conn);
            cmdItems.Parameters.AddWithValue("@cartId", cart.CartId.ToString());
            // Executing The Querry
            using var itemsReader = await cmdItems.ExecuteReaderAsync();
            while ( await itemsReader.ReadAsync())
            {
                cart.Items.Add
                (
                    new CartItem
                    {
                        CartItemId = Guid.Parse(itemsReader["CartItemId"].ToString()),
                        CartId = Guid.Parse(itemsReader["CartId"].ToString()),
                        ProductId = Convert.ToInt32(itemsReader["ProductId"]),
                        Stock = Convert.ToInt32(itemsReader["Quantity"])
                    }
                );
            }
            // Return The Entire Cart
            return cart;
        }
        // Create A Cart For The User
        public async Task<Cart> CreateCart_ForUser(Guid userId)
        {
            // Initializing The Cart Variable
            var newCart = new Cart
            {
                CartId = Guid.NewGuid(),
                UserId = userId,
                CreatedAt = DateTime.UtcNow
            };
            // Opening The Connection To The Database
            using var conn = new MySqlConnection(this._connString);
            await conn.OpenAsync();
            // The MySql Querry Against The Sql Injection Attack For Inserting The New Cart Into The Database
            var cmdNewCart = new MySqlCommand("INSERT INTO Carts (CartId, UserId, CreatedAt) VALUES (@cartId, @userId, @createdAt)", conn);
            cmdNewCart.Parameters.AddWithValue("@userId", newCart.UserId);
            cmdNewCart.Parameters.AddWithValue("@cartId", newCart.CartId);
            cmdNewCart.Parameters.AddWithValue("@createdAt", newCart.CreatedAt);
            // Executing The MySql Querry
            cmdNewCart.ExecuteNonQueryAsync();
            // Return The Created Cart
            return newCart;
        }
        // Add A Product To The Cart
        public async Task AddItem_ForCart(Guid cartId , AddToCartRequest req)
        {
            // Initializing The Database Connection
            using var conn = new MySqlConnection(this._connString);
            await conn.OpenAsync();
            // MySql Querry Against The Sql Injection Attack To Add An Item To A Cart
            var cmdNewItem = new MySqlCommand("INSERT INTO CartItems (CartItemId, CartId, ProductId, Quantity) VALUES (@cartItemId, @cartId, @productId, @quantity)", conn);
            cmdNewItem.Parameters.AddWithValue("@cartItemId", Guid.NewGuid().ToString());
            cmdNewItem.Parameters.AddWithValue("cartId", cartId.ToString());
            cmdNewItem.Parameters.AddWithValue("productId", req.ProductId);
            cmdNewItem.Parameters.AddWithValue("quantity", req.Stock);
            // Executing The MySql Querry
            await cmdNewItem.ExecuteNonQueryAsync();
        }
        // Change The Quantity Of The Selected Cart Product
        public async Task UpdateStock_ForCartItem(Guid cartId , UpdateStockRequest req)
        {
            // Initializing The Database Connection
            using var conn = new MySqlConnection(this._connString);
            await conn.OpenAsync();
            // MySql Querry Against The Sql Injection Attack To Update The Stock Of A Product In
            var cmdUpdateStock = new MySqlCommand("UPDATE CartItems SET Quantity = @stock WHERE CartId = @cartId AND ProductId = @productId", conn);
            cmdUpdateStock.Parameters.AddWithValue("@stock", req.Stock);
            cmdUpdateStock.Parameters.AddWithValue("@cartId", cartId.ToString());
            cmdUpdateStock.Parameters.AddWithValue("@productId", req.ProductId);
            // Executing The MySql Querry
            await cmdUpdateStock.ExecuteNonQueryAsync();
        }
        // Getting Rid Of A Product From The Cart
        public async Task RemoveItem_FromCart(Guid cartId , int productId)
        {
            // Initializing The Database Connection
            using var conn = new MySqlConnection(this._connString);
            await conn.OpenAsync();
            // MySql Querry Against The Sql Injection Attack To Remove An Item From A Cart
            var cmdRemoveItem = new MySqlCommand("DELETE FROM CartItems WHERE CartId = @cartId AND ProductId = @productId", conn);
            cmdRemoveItem.Parameters.AddWithValue("@cartId", cartId.ToString());
            cmdRemoveItem.Parameters.AddWithValue("@productId", productId);
            // Executing The MySql Querry
            await cmdRemoveItem.ExecuteNonQueryAsync();
        }
        // Clean The Entire Cart
        public async Task RemoveAll_FromCart(Guid cartId)
        {
            // Initializing The Database Connection
            using var conn = new MySqlConnection(this._connString);
            await conn.OpenAsync();
            // MySql Querry Against The Sql Injection Attack To Remove All Items From A Cart
            var cmdClearCart = new MySqlCommand("DELETE FROM CartItems WHERE CartId = @cartId", conn);
            cmdClearCart.Parameters.AddWithValue("@cartId", cartId.ToString());
            // Executing The MySql Querry
            await cmdClearCart.ExecuteNonQueryAsync();
        }
    }
}
