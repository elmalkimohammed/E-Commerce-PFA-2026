namespace OrderService.DTOs;

public record CreateOrderDto(
    Guid UserId,
    List<OrderItemDto> Items
);

public record OrderItemDto(
    int ProductId,          // Change from int to Guid
    string ProductName,
    int Quantity,
    decimal UnitPrice
);