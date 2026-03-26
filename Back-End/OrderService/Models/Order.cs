namespace OrderService.Models;

public class Order
{
    public Guid OrderId { get; set; }
    public Guid UserId { get; set; }

    public List<OrderItem> OrderItems { get; set; } = new();

    public OrderStatus Status { get; set; } = OrderStatus.Confirmed;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}