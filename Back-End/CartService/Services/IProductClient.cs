namespace CartService.Services
{
    public interface IProductClient
    {
        Task<bool> ProductExistance_Verification(int productId);
    }
}
