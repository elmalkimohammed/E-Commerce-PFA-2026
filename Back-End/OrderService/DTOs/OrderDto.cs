namespace OrderService.DTOs
{
    public record OrderResponseDto(
    Guid OrderId,
    Guid UserId,
    string Status,
    DateTime CreatedAt,
    List<OrderItemResponseDto> Items
);

    public record OrderItemResponseDto(
        int ProductId,
        string ProductName,
        int Quantity,
        decimal UnitPrice
    );
}
