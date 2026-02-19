using AuthService.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.Data.SqlClient;
namespace AuthService.Repository
{
    public class userRepository
    {
        // Connection String for SQL Server Database
        private readonly String _connectionString;
        public userRepository(IConfiguration configuration)
        {
            this._connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        // The Method Responsable For Getting The User's Infos Through Their Email
        public async Task<User> GetThroughEmail(String email)
        {
            // Open The Database Connection
            using var connection = new SqlConnection(this._connectionString);
            await connection.OpenAsync();

            // Sql Command To Get The User Through Email
            var cmd = new SqlCommand("SELECT * FROM Users WHERE Email = @email", connection);
            cmd.Parameters.AddWithValue("@email", email);

            // Executing The Sql Command
            using var reader = await cmd.ExecuteReaderAsync();

            // Checking If The Email Doesn't Exist
            if( !reader.Read() )
            {
                return null;
            }

            // Returing The Found User Object
            return new User {
                UserId = reader.GetGuid(0),
                Email = reader.GetString(1),
                PasswordHash = reader.GetString(2),
                Role = reader.GetString(3),
                CreatedAt = reader.GetDateTime(4)
            };
        }

        // Method Responsable For Adding A New User To The Database
        public async Task CreateUser(User user)
        {
            // Open The Database Connection
            using var connection = new SqlConnection(this._connectionString);
            await connection.OpenAsync();

            // Sql Command To Insert The New User Into The Database
            var cmd = new SqlCommand("INSERT INTO Users (UserId, Email, PasswordHash, Role, CreatedAt) VALUES (@userid, @email, @passwordhash, @role, @createdat)", connection);
            cmd.Parameters.AddWithValue("@userid", user.UserId);
            cmd.Parameters.AddWithValue("@email", user.Email);
            cmd.Parameters.AddWithValue("@passwordhash", user.PasswordHash);
            cmd.Parameters.AddWithValue("@role", user.Role);
            cmd.Parameters.AddWithValue("@createdat", user.CreatedAt);

            // Executing The Sql Command
            await cmd.ExecuteNonQueryAsync();
        }

        // The Method Responsable For Updating The Passsword Of A User
        public async Task UpdateForgottenPassword(Guid userId, String newPassword)
        {
            // Open The Database Connection
            using var connection = new SqlConnection(this._connectionString);
            await connection.OpenAsync();

            // Sql Command To Update The Old Password According To The Given UserId
            var cmd = new SqlCommand("UPDATE Users SET PasswordHash = @password WHERE UserId = @userId", connection);
            cmd.Parameters.AddWithValue("@password", newPassword);
            cmd.Parameters.AddWithValue("userId", userId);

            // Executing The Sql Command
            await cmd.ExecuteNonQueryAsync();
        }
    }
}
