using OrderService.Enums;

namespace OrderService.Entities
{
    public class Order
    {
        public Guid OrderId { get; set; } = Guid.NewGuid();
        public Guid UserId { get; set; }
        public OrderStatus Status { get; set; } = OrderStatus.Pending;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Navigation
        public ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
    }
}
