using OrderService.Entities;

namespace OrderService.Repositories
{
    public interface IOrderRepository
    {
        Task<Order> CreateAsync(Order order);
        Task<Order?> GetByIdAsync(Guid orderId);
        Task<IEnumerable<Order>> GetActiveByUserIdAsync(Guid userId);
        Task<Order?> UpdateAsync(Order order);
        Task<IEnumerable<Order>> GetAllOrdersAsync();
        Task<bool> DeleteAsync(Guid orderId);  // Change from int to Guid
    }
}