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
                CreatedAt = Convert.ToDateTime(reader["CreatedAt"])
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
                        CartItemId = Guid.Parse(itemsReader["CartItemsId"].ToString()),
                        CartId = Guid.Parse(itemsReader["CartItemsId"].ToString()),
                        ProductId = Convert.ToInt32(itemsReader["ProductId"]),
                        Stock = Convert.ToInt32(itemsReader["Quantity"])
                    }
                )
            }
            // Return The Entire Cart
            return cart;
        }
        // Create A Cart For The User
        public async Task CreateCart_ForUser(Guid userId)
        {
            // Initializing The Cart Variable
            var newCart = new Cart
            {
                CartId = Guid.NewGuid(),
                UserId = userId,
                CreatedAt = DateTime.UtcNow
            }
            // Opening The Connection To The Database
            using var conn = new MySqlConnection(this._connString);
            await conn.OpenAsync();
            // The MySql Querry Against The Sql Injection Attack For Inserting The New Cart Into The Database
            var cmdNewCart = new MySqlCommand("INSERT INTO Carts (CartId, UserId, CreatedAt) VALUES (@cartId, @userId, @createdAt)", conn);
            cmdNewCart.Parameters.AddWithValue("@userId", newCart.CartId);
            cmdNewCart.Parameters.AddWithValue("@cartId", newCart.UserId);
            cmdNewCart.Parameters.AddWithValue("@createdAt", newCart.CreatedAt);
            // Executing The MySql Querry
            cmdNewCart.ExecuteNonQueryAsync();
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
