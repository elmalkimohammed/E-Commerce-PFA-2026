using OrderService.Models;

namespace OrderService.Services;

public interface IOrderService
{
    Task<Order> CreateOrderAsync(Guid userId, List<OrderItem> items);
    Task<List<Order>> GetUserOrdersAsync(Guid userId);
    Task CancelOrderAsync(Guid orderId);
    Task UpdateStatusAsync(Guid orderId, OrderStatus status);
}