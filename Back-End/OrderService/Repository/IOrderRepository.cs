using OrderService.Entities;

namespace OrderService.Repositories;

public interface IOrderRepository
{
    Task<Order> CreateAsync(Order order);
    Task<IEnumerable<Order>> GetActiveByUserIdAsync(Guid userId);
    Task<Order?> GetByIdAsync(Guid orderId);
    Task<Order> UpdateAsync(Order order);
    Task<bool> DeleteAsync(Guid orderId);
    Task<IEnumerable<Order>> GetAllOrdersAsync();
}