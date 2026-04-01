

namespace OrderService.Entities;

public class OrderItem
{
    public Guid OrderItemId { get; set; } = Guid.NewGuid();
    public Guid OrderId { get; set; }
    public Guid ProductId { get; set; }
    public string ProductName { get; set; } = string.Empty;
    public int Quantity { get; set; }
    public decimal UnitPrice { get; set; }

    // Navigation
    public Order Order { get; set; } = null!;
}