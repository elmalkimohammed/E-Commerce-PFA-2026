using OrderService.DTOs;
using OrderService.Entities;
using OrderService.Enums;
using OrderService.Repositories;

namespace OrderService.Services;

public class OrderService1 : IOrderService
{
    private readonly IOrderRepository _repository;
    private readonly IKafkaProducerService _kafkaProducer;

    // ─── Injection du KafkaProducer ───
    public OrderService1(IOrderRepository repository, IKafkaProducerService kafkaProducer)
    {
        _repository     = repository;
        _kafkaProducer  = kafkaProducer;
    }

    // ─── Créer commande depuis panier ───
    public async Task<OrderResponseDto> CreateOrderFromCartAsync(CreateOrderDto dto)
    {
        var order = new Order
        {
            UserId     = dto.UserId,
            OrderItems = dto.Items.Select(i => new OrderItem
            {
                ProductId   = i.ProductId,
                ProductName = i.ProductName,
                Quantity    = i.Quantity,
                UnitPrice   = i.UnitPrice
            }).ToList()
        };

        var created = await _repository.CreateAsync(order);

        // ─── Kafka : notifier la confirmation de commande ───
        await _kafkaProducer.AsyncPublish(
            "order-confirmed",
            $"{created.UserId}::{created.OrderId}"
        );

        return MapToDto(created);
    }

    // ─── Créer commande produit unique ───
    public async Task<OrderResponseDto> CreateSingleProductOrderAsync(Guid userId, OrderItemDto item)
    {
        var order = new Order
        {
            UserId     = userId,
            OrderItems = new List<OrderItem>
            {
                new OrderItem
                {
                    ProductId   = item.ProductId,
                    ProductName = item.ProductName,
                    Quantity    = item.Quantity,
                    UnitPrice   = item.UnitPrice
                }
            }
        };

        var created = await _repository.CreateAsync(order);

        // ─── Kafka : notifier la confirmation de commande ───
        await _kafkaProducer.AsyncPublish(
            "order-confirmed",
            $"{created.UserId}::{created.OrderId}"
        );

        return MapToDto(created);
    }

    // ─── Récupérer les commandes actives ───
    public async Task<IEnumerable<OrderResponseDto>> GetActiveOrdersByUserAsync(Guid userId)
    {
        var orders = await _repository.GetActiveByUserIdAsync(userId);
        return orders.Select(MapToDto);
    }

    // ─── Mettre à jour le status d'une commande ───
    public async Task<OrderResponseDto> UpdateOrderStatusAsync(Guid orderId, UpdateOrderStatusDto dto)
    {
        if (!Enum.TryParse<OrderStatus>(dto.Status, true, out var newStatus))
            throw new ArgumentException($"Invalid status: {dto.Status}");

        var order = await _repository.GetByIdAsync(orderId)
            ?? throw new KeyNotFoundException($"Order {orderId} not found.");

        order.Status = newStatus;
        var updated = await _repository.UpdateAsync(order);
        return MapToDto(updated!);
    }

    public async Task<IEnumerable<OrderResponseDto>> GetAllOrdersAsync()
    {
        var orders = await _repository.GetAllOrdersAsync();
        return orders.Select(MapToDto);
    }

    // ─── Annuler une commande ───
    public async Task<bool> CancelOrderAsync(Guid orderId)
    {
        var order = await _repository.GetByIdAsync(orderId)
            ?? throw new KeyNotFoundException($"Order {orderId} not found.");

        if (order.Status == OrderStatus.Shipped || order.Status == OrderStatus.Delivered)
            throw new InvalidOperationException("Cannot cancel a shipped or delivered order.");

        var userId = order.UserId;
        var result = await _repository.DeleteAsync(orderId);

        // ─── Kafka : notifier l'annulation de commande ───
        if (result)
        {
            await _kafkaProducer.AsyncPublish(
                "order-cancelled",
                $"{userId}::{orderId}"
            );
        }

        return result;
    }

    public async Task<Order> GetOrderByIdAsync(Guid orderId)
    {
        var order = await _repository.GetByIdAsync(orderId);
        if (order == null)
            throw new KeyNotFoundException($"Order {orderId} not found.");
        return order;
    }

    private static OrderResponseDto MapToDto(Order order) => new(
        order.OrderId,
        order.UserId,
        order.Status.ToString(),
        order.CreatedAt,
        order.OrderItems.Select(i => new OrderItemResponseDto(
            i.ProductId,
            i.ProductName,
            i.Quantity,
            i.UnitPrice
        )).ToList()
    );
}