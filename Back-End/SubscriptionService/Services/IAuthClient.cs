namespace SubscriptionService.Services
{
    public interface IAuthClient
    {
        public Task<bool> userExistance_Verification( Guid userId );
    }
}
