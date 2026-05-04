using OrderService.DTOs;
using OrderService.Entities;

namespace OrderService.Services
{
    public interface IOrderService
    {
        Task<OrderResponseDto> CreateOrderFromCartAsync(CreateOrderDto dto);
        Task<OrderResponseDto> CreateSingleProductOrderAsync(Guid userId, OrderItemDto item);
        Task<IEnumerable<OrderResponseDto>> GetActiveOrdersByUserAsync(Guid userId);
        Task<OrderResponseDto> UpdateOrderStatusAsync(Guid orderId, UpdateOrderStatusDto dto);
        Task<IEnumerable<OrderResponseDto>> GetAllOrdersAsync();
        Task<bool> CancelOrderAsync(Guid orderId);
        Task<Order> GetOrderByIdAsync(Guid orderId);
    }
}