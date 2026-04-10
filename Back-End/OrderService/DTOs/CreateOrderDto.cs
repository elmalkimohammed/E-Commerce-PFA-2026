namespace OrderService.DTOs;

public record CreateOrderDto(
    Guid UserId,
    List<OrderItemDto> Items
);

public record OrderItemDto(
    int ProductId,
    string ProductName,
    int Quantity,
    decimal UnitPrice
);