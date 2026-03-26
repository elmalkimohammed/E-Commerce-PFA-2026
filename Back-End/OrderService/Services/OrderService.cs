using OrderService.Models;
using OrderService.Repository;

namespace OrderService.Services;

public class OrderService : IOrderService
{
    private readonly IOrderRepository _repo;

    public OrderService(IOrderRepository repo)
    {
        _repo = repo;
    }

    public async Task<Order> CreateOrderAsync(Guid userId, List<OrderItem> items)
    {
        var order = new Order
        {
            UserId = userId,
            OrderItems = items
        };

        await _repo.AddAsync(order);
        return order;
    }

    public async Task<List<Order>> GetUserOrdersAsync(Guid userId)
    {
        return await _repo.GetByUserIdAsync(userId);
    }

    public async Task CancelOrderAsync(Guid orderId)
    {
        var order = await _repo.GetByIdAsync(orderId);
        if (order == null) throw new Exception("Order not found");

        order.Status = OrderStatus.Cancelled;
        await _repo.UpdateAsync(order);
    }

    public async Task UpdateStatusAsync(Guid orderId, OrderStatus status)
    {
        var order = await _repo.GetByIdAsync(orderId);
        if (order == null) throw new Exception("Order not found");

        order.Status = status;
        await _repo.UpdateAsync(order);
    }
}