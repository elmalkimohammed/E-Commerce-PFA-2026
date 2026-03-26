
using OrderService.Models;

namespace OrderService.DTOs;

public class CreateOrderDto
{
    public Guid UserId { get; set; }
    public List<OrderItem> Items { get; set; } = new();
}