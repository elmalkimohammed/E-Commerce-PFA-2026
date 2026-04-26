using UserProfileService.Model;

namespace UserProfileService.Repository
{
    public interface IUserProfileHandler
    {
        public Task AddRegistered(UserRegisteredEvent user);
        public void UpdatePublicInfo(UserProfilePublicInfo user);
        public void UpdatePrivateInfo(UserProfilePrivateInfo user);
        public UserFullInfo FullInfo (string userId);
        public Task<List<UserFullInfo>> GetUsersFullInfos();
        Task DeleteUserProfile(Guid userId);
    }
}
