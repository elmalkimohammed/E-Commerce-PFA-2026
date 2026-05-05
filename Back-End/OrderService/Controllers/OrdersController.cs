using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OrderService.DTOs;
using OrderService.Services;
using OrderService.Events;
using System.Security.Claims;

namespace OrderService.API.Controllers;

[ApiController]
[Route("api/orders")]
[Authorize]
public class OrdersController : ControllerBase
{
    private readonly IOrderService _orderService;
    private readonly OrderEventService _orderEventService;
    private readonly ILogger<OrdersController> _logger;

    public OrdersController(
        IOrderService orderService, 
        OrderEventService orderEventService,
        ILogger<OrdersController> logger)
    {
        _orderService = orderService;
        _orderEventService = orderEventService;
        _logger = logger;
    }

    private string GetCurrentUser()
    {
        return User.FindFirst("email")?.Value 
            ?? User.FindFirst(ClaimTypes.Email)?.Value
            ?? User.FindFirst("sub")?.Value 
            ?? "Unknown";
    }

    [HttpPost("cart")]
    public async Task<IActionResult> CreateFromCart([FromBody] CreateOrderDto dto)
    {
        try
        {
            var orderResponse = await _orderService.CreateOrderFromCartAsync(dto);
            
            // Get the actual Order entity
            var orderEntity = await _orderService.GetOrderByIdAsync(orderResponse.OrderId);
            await _orderEventService.PublishOrderCreatedEvent(orderEntity, GetCurrentUser());
            
            return CreatedAtAction(nameof(GetActiveOrders), new { userId = orderResponse.UserId }, orderResponse);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating order from cart");
            return BadRequest(new { error = ex.Message });
        }
    }

    [HttpPost("users/{userId}/single")]
    public async Task<IActionResult> CreateSingleProduct(Guid userId, [FromBody] OrderItemDto item)
    {
        try
        {
            var orderResponse = await _orderService.CreateSingleProductOrderAsync(userId, item);
            
            // Get the actual Order entity
            var orderEntity = await _orderService.GetOrderByIdAsync(orderResponse.OrderId);
            await _orderEventService.PublishOrderCreatedEvent(orderEntity, GetCurrentUser());
            
            return CreatedAtAction(nameof(GetActiveOrders), new { userId }, orderResponse);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating single product order");
            return BadRequest(new { error = ex.Message });
        }
    }

    [HttpGet("users/{userId}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetActiveOrders(Guid userId)
    {
        var orders = await _orderService.GetActiveOrdersByUserAsync(userId);
        return Ok(orders);
    }

    [HttpPut("{orderId}/status")]
    public async Task<IActionResult> UpdateStatus(Guid orderId, [FromBody] UpdateOrderStatusDto dto)
    {
        try
        {
            var orderResponse = await _orderService.UpdateOrderStatusAsync(orderId, dto);
            
            // Get the actual Order entity
            var orderEntity = await _orderService.GetOrderByIdAsync(orderId);
            await _orderEventService.PublishOrderUpdatedEvent(orderEntity, GetCurrentUser());
            
            return Ok(orderResponse);
        }
        catch (KeyNotFoundException ex) { return NotFound(new { message = ex.Message }); }
        catch (ArgumentException ex) { return BadRequest(new { message = ex.Message }); }
    }

    [HttpGet("all")]
    [Authorize(Roles = "Admin,Invet")]
    public async Task<IActionResult> GetAllOrders()
    {
        var orders = await _orderService.GetAllOrdersAsync();
        return Ok(orders);
    }

    [HttpDelete("{orderId}")]
    public async Task<IActionResult> CancelOrder(Guid orderId)
    {
        try
        {
            var orderEntity = await _orderService.GetOrderByIdAsync(orderId);
            if (orderEntity == null)
                return NotFound(new { message = "Order not found" });

            await _orderService.CancelOrderAsync(orderId);
            
            await _orderEventService.PublishOrderCancelledEvent(orderEntity, GetCurrentUser());
            
            return NoContent();
        }
        catch (KeyNotFoundException ex) { return NotFound(new { message = ex.Message }); }
        catch (InvalidOperationException ex) { return BadRequest(new { message = ex.Message }); }
    }
}