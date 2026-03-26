using OrderService.Models;

namespace OrderService.Repository;

public interface IOrderRepository
{
    Task<Order?> GetByIdAsync(Guid id);
    Task<List<Order>> GetByUserIdAsync(Guid userId);
    Task AddAsync(Order order);
    Task UpdateAsync(Order order);
}