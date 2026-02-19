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

        // The Method Responsable For Getting The Email
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
    }
}
