
namespace SubscriptionService.Services
{
    public class AuthClient : IAuthClient
    {
        private readonly HttpClient _httpClient;
        public AuthClient(HttpClient httpClient)
        {
            this._httpClient = httpClient;
        }
        public async Task<bool> userExistance_Verification( Guid userId )
        {
            /* Sending An HTTP Request To The AuthService API To Verify The Existance Of The Given userId In Its Database */
            var response = await this._httpClient.GetAsync($"http://authservice-api:5181/api/auth/verify-userId/{userId}");
            return response.IsSuccessStatusCode;
        }
    }
}
