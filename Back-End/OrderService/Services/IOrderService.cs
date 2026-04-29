using OrderService.DTOs;


namespace OrderService.Services;

public interface IOrderService
{
    Task<OrderResponseDto> CreateOrderFromCartAsync(CreateOrderDto dto);
    Task<OrderResponseDto> CreateSingleProductOrderAsync(Guid userId, OrderItemDto item);
    Task<IEnumerable<OrderResponseDto>> GetActiveOrdersByUserAsync(Guid userId);
    Task<OrderResponseDto> UpdateOrderStatusAsync(Guid orderId, UpdateOrderStatusDto dto);
    Task<bool> CancelOrderAsync(Guid orderId);
   
    Task<IEnumerable<OrderResponseDto>> GetAllOrdersAsync();
}