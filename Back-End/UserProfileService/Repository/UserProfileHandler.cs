using Microsoft.AspNetCore.DataProtection.KeyManagement;
using MySqlConnector;
using System.Collections.Concurrent;
using System.Reflection.Emit;
using UserProfileService.Enums;
using UserProfileService.Model;
using UserProfileService.Services;
using static System.Net.Mime.MediaTypeNames;

namespace UserProfileService.Repository
{
    public class UserProfileHandler : IUserProfileHandler
    {
        private readonly string connection;
        private readonly string AuthConnection;
        public UserProfileHandler(IConfiguration coon) 
        {
            connection = coon.GetConnectionString("DefaultConnection");
            AuthConnection = coon.GetConnectionString("AuthConnection");
        }
        public async Task AddRegistered(UserRegisteredEvent user)
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();
            string sql = @"INSERT INTO UserProfile(UserId, FirstName, LastName)
                            VALUES(@UserId, 'user', 'Default')
                            ON DUPLICATE KEY UPDATE UserId = UserId;";

            using MySqlCommand cmd = new MySqlCommand(sql, coon);
            cmd.Parameters.AddWithValue("@UserId", user.UserId.ToString());

            cmd.ExecuteNonQuery();
            coon.Close();

        }

        public UserFullInfo FullInfo(string userId)
        {
            UserFullInfo user = new UserFullInfo();
            using MySqlConnection coon = new MySqlConnection(AuthConnection);
            coon.Open();
            string authSql = @"SELECT UserId, Email, PasswordHash FROM Users WHERE UserId = @UserId;";
            MySqlCommand cmd = new MySqlCommand(authSql, coon);
            cmd.Parameters.AddWithValue("@UserId", userId.ToString());
            using MySqlDataReader rd = cmd.ExecuteReader();
            if (rd.Read())
            {
                user.UserId = rd.GetGuid("UserId");
                user.Email = rd.GetString("Email");
                user.Password = rd.GetString("PasswordHash");
            }
            else
            {
                throw new Exception("User not found In Auth.Users Table ");
            }
            coon.Close();
            using MySqlConnection Profilecoon = new MySqlConnection(connection);
            Profilecoon.Open();
            string profileSql = @"
            SELECT FirstName, LastName, Phone, Address, Sex, DateOfBirth, ProfileImage
            FROM UserProfile
            WHERE UserId = @UserId;";
            using MySqlCommand Profilecmd = new MySqlCommand(profileSql, Profilecoon);
            Profilecmd.Parameters.AddWithValue("@UserId", userId);
            using MySqlDataReader ProfileRd = Profilecmd.ExecuteReader();
            if (ProfileRd.Read())
            {
                user.FirstName = ProfileRd["FirstName"] as string ?? "user";
                user.LastName = ProfileRd["LastName"] as string ?? "Default";
                user.Phone = ProfileRd["Phone"] as string;
                user.Address = ProfileRd["Address"] as string;
                user.Sex = ProfileRd["Sex"] != DBNull.Value ? Enum.Parse<Sex>((string)ProfileRd["Sex"]) : null;
                user.DateOfBirth = ProfileRd["DateOfBirth"] as DateTime?;
                user.ProfileImage = ProfileRd["ProfileImage"] as string;
            }
            else
            {
                throw new Exception("User not found In UserProfileDb.UserProfile Table");
            }
            return user;

        }

        public void UpdatePrivateInfo(UserProfilePrivateInfo user)
        {
            using MySqlConnection coon = new MySqlConnection(AuthConnection);
            coon.Open();
            if (user.Email != null && user.password != null)
            {
                string sql = @"UPDATE Users 
                   SET Email = @Email,
                   PasswordHash = @PasswordHash
                   WHERE UserId = @UserId";
                MySqlCommand cmd = new MySqlCommand(sql, coon);
                string HashedPassword = PasswordHash.PasswwordHasher(user.password);
                cmd.Parameters.AddWithValue("@Email", user.Email);
                cmd.Parameters.AddWithValue("@PasswordHash", HashedPassword);
                cmd.Parameters.AddWithValue("@UserId", user.UserId.ToString());

                cmd.ExecuteNonQuery(); 
                coon.Close();
            }
            if (user.Email != null && user.password == null) 
            {
                string sql = @"UPDATE Users 
                   SET Email = @Email
                   WHERE UserId = @UserId";
                MySqlCommand cmd = new MySqlCommand(sql, coon);
                cmd.Parameters.AddWithValue("@Email", user.Email);
                cmd.Parameters.AddWithValue("@UserId", user.UserId.ToString());

                cmd.ExecuteNonQuery();
                coon.Close();
            }
            if (user.Email == null && user.password != null) 
            {
                string sql = @"UPDATE Users 
                   SET PasswordHash = @PasswordHash
                   WHERE UserId = @UserId";
                MySqlCommand cmd = new MySqlCommand(sql, coon);
                string HashedPassword = PasswordHash.PasswwordHasher(user.password);
                cmd.Parameters.AddWithValue("@PasswordHash", HashedPassword);
                cmd.Parameters.AddWithValue("@UserId", user.UserId.ToString());
                cmd.ExecuteNonQuery();
                coon.Close();

            }
        }

        public void UpdatePublicInfo(UserProfilePublicInfo user)
        {
            using MySqlConnection coon = new MySqlConnection(connection);
            coon.Open();

            List<string> updates = new List<string>();
            MySqlCommand cmd = new MySqlCommand();
            cmd.Connection = coon;

            if (user.FirstName != null)
            {
                updates.Add("FirstName = @FirstName");
                cmd.Parameters.AddWithValue("@FirstName", user.FirstName);
            }

            if (user.LastName != null)
            {
                updates.Add("LastName = @LastName");
                cmd.Parameters.AddWithValue("@LastName", user.LastName);
            }

            if (user.Phone != null)
            {
                updates.Add("Phone = @Phone");
                cmd.Parameters.AddWithValue("@Phone", user.Phone);
            }

            if (user.Address != null)
            {
                updates.Add("Address = @Address");
                cmd.Parameters.AddWithValue("@Address", user.Address);
            }

            if (user.Sex != null)
            {
                updates.Add("Sex = @Sex");
                cmd.Parameters.AddWithValue("@Sex", user.Sex.ToString());
            }

            if (user.DateOfBirth != null)
            {
                updates.Add("DateOfBirth = @DateOfBirth");
                cmd.Parameters.AddWithValue("@DateOfBirth", user.DateOfBirth);
            }

            if (user.ProfileImage != null)
            {
                updates.Add("ProfileImage = @ProfileImage");
                cmd.Parameters.AddWithValue("@ProfileImage", user.ProfileImage);
            }

            if (updates.Count == 0)
            {
                throw new Exception("No fields to update.");
            }

            string sql = $"UPDATE UserProfile SET {string.Join(", ", updates)} WHERE UserId = @UserId";

            cmd.Parameters.AddWithValue("@UserId", user.UserId);
            cmd.CommandText = sql;
            cmd.ExecuteNonQuery();
        }
        public async Task<List<UserFullInfo>> GetUsersFullInfos()
        {
            List<string> userIds = new List<string>();

            // First, get all UserIds
            using (MySqlConnection authConn = new MySqlConnection(AuthConnection))
            {
                await authConn.OpenAsync();

                string sql = @"SELECT UserId FROM Users;";
                using MySqlCommand cmd = new MySqlCommand(sql, authConn);
                using MySqlDataReader rd = await cmd.ExecuteReaderAsync();

                while (await rd.ReadAsync())
                {
                    userIds.Add(rd.GetGuid("UserId").ToString());
                }
            }

            // Process users in parallel for better performance
            var users = new ConcurrentBag<UserFullInfo>();

            await Task.Run(() =>
            {
                Parallel.ForEach(userIds, userId =>
                {
                    try
                    {
                        UserFullInfo user = FullInfo(userId);
                        users.Add(user);
                    }
                    catch (Exception ex)
                    {
                        // Log the error
                        Console.WriteLine($"Error fetching user {userId}: {ex.Message}");
                    }
                });
            });

            return users.ToList();
        }
        public async Task DeleteUserProfile(Guid userId)
        {
            try
            {
                Console.WriteLine($"=== 🗑️ DELETE USER PROFILE ===");
                Console.WriteLine($"Looking for UserId: {userId}");

                using var connection = new MySqlConnection(this.connection);
                await connection.OpenAsync();

                // First check if the user exists
                var checkCmd = new MySqlCommand("SELECT COUNT(*) FROM UserProfile WHERE UserId = @userId", connection);
                checkCmd.Parameters.AddWithValue("@userId", userId.ToString());
                int exists = Convert.ToInt32(await checkCmd.ExecuteScalarAsync());
                Console.WriteLine($"User exists in UserProfile table: {exists > 0}");

                if (exists == 0)
                {
                    Console.WriteLine($"⚠️ User {userId} not found in UserProfile table");
                    return;
                }

                // Delete the user
                var deleteCmd = new MySqlCommand("DELETE FROM UserProfile WHERE UserId = @userId", connection);
                deleteCmd.Parameters.AddWithValue("@userId", userId.ToString());
                int rowsAffected = await deleteCmd.ExecuteNonQueryAsync();

                Console.WriteLine($"✅ Rows affected: {rowsAffected}");
                Console.WriteLine($"✅ User {userId} deleted successfully");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"❌ Database error: {ex.Message}");
                Console.WriteLine($"Stack trace: {ex.StackTrace}");
                throw;
            }
        }
    }
}
