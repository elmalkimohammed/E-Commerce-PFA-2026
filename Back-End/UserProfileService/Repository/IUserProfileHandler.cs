using UserProfileService.Model;

namespace UserProfileService.Repository
{
    public interface IUserProfileHandler
    {
        public void AddRegistered(UserRegisteredEvent user);
        public void UpdatePublicInfo(UserProfilePublicInfo user);
        public void UpdatePrivateInfo(UserProfilePrivateInfo user);
        public UserFullInfo FullInfo (Guid userId);


    }
}
