using AuthService.Models;

namespace AuthService.Repository
{
    public interface IUserRepository
    {
        public Task<User> GetThroughEmail(String email);
        public Task CreateUser(User user);
        public Task UpdateForgottenPassword(Guid userId, String newPassword);
    }
}
