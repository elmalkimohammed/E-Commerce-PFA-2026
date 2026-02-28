using AuthService.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using MySql.Data.MySqlClient;

namespace AuthService.Repository
{
    public class userRepository : IUserRepository
    {
        // Connection String for MySQL Database
        private readonly String _connectionString;
        public userRepository(IConfiguration configuration)
        {
            this._connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        // The Method Responsible For Getting The User's Info Through Their Email
        public async Task<User> GetThroughEmail(String email)
        {
            // Open The Database Connection
            using var connection = new MySqlConnection(this._connectionString);
            await connection.OpenAsync();

            // MySQL Command To Get The User Through Email
            var cmd = new MySqlCommand("SELECT * FROM Users WHERE Email = @email", connection);
            cmd.Parameters.AddWithValue("@email", email);

            // Executing The MySQL Command
            using var reader = await cmd.ExecuteReaderAsync();

            // Checking If The Email Doesn't Exist
            if( !await reader.ReadAsync() )
            {
                return null;
            }

            // Returning The Found User Object
            return new User {
                UserId = reader.GetGuid(0),
                Email = reader.GetString(1),
                PasswordHash = reader.GetString(2),
                Role = reader.GetString(3),
                CreatedAt = reader.GetDateTime(4)
            };
        }

        // Method Responsible For Adding A New User To The Database
        public async Task CreateUser(User user)
        {
            // Open The Database Connection
            using var connection = new MySqlConnection(this._connectionString);
            await connection.OpenAsync();

            // MySQL Command To Insert The New User Into The Database
            var cmd = new MySqlCommand("INSERT INTO Users (UserId, Email, PasswordHash, Role, CreatedAt) VALUES (@userid, @email, @passwordhash, @role, @createdat)", connection);
            cmd.Parameters.AddWithValue("@userid", user.UserId);
            cmd.Parameters.AddWithValue("@email", user.Email);
            cmd.Parameters.AddWithValue("@passwordhash", user.PasswordHash);
            cmd.Parameters.AddWithValue("@role", user.Role);
            cmd.Parameters.AddWithValue("@createdat", user.CreatedAt);

            // Executing The MySQL Command
            await cmd.ExecuteNonQueryAsync();
        }

        // The Method Responsible For Updating The Password Of A User
        public async Task UpdateForgottenPassword(Guid userId, String newPassword)
        {
            // Open The Database Connection
            using var connection = new MySqlConnection(this._connectionString);
            await connection.OpenAsync();

            // MySQL Command To Update The Old Password According To The Given UserId
            var cmd = new MySqlCommand("UPDATE Users SET PasswordHash = @password WHERE UserId = @userId", connection);
            cmd.Parameters.AddWithValue("@password", newPassword);
            cmd.Parameters.AddWithValue("@userId", userId);

            // Executing The MySQL Command
            await cmd.ExecuteNonQueryAsync();
        }
    }
}