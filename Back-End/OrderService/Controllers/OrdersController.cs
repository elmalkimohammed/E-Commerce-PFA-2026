using Microsoft.AspNetCore.Mvc;
using OrderService.DTOs;
using OrderService.Services;

namespace OrderService.API.Controllers;

[ApiController]
[Route("api/orders")]
public class OrdersController(IOrderService orderService) : ControllerBase
{
    [HttpPost("cart")]
    public async Task<IActionResult> CreateFromCart([FromBody] CreateOrderDto dto)
    {
        var order = await orderService.CreateOrderFromCartAsync(dto);
        return CreatedAtAction(nameof(GetActiveOrders), new { userId = order.UserId }, order);
    }

    [HttpPost("users/{userId}/single")]
    public async Task<IActionResult> CreateSingleProduct(Guid userId, [FromBody] OrderItemDto item)
    {
        var order = await orderService.CreateSingleProductOrderAsync(userId, item);
        return CreatedAtAction(nameof(GetActiveOrders), new { userId }, order);
    }

    [HttpGet("users/{userId}")]
    public async Task<IActionResult> GetActiveOrders(Guid userId)
    {
        var orders = await orderService.GetActiveOrdersByUserAsync(userId);
        return Ok(orders);
    }

    [HttpPut("{orderId}/status")]
    public async Task<IActionResult> UpdateStatus(Guid orderId, [FromBody] UpdateOrderStatusDto dto)
    {
        try
        {
            var order = await orderService.UpdateOrderStatusAsync(orderId, dto);
            return Ok(order);
        }
        catch (KeyNotFoundException ex) { return NotFound(new { message = ex.Message }); }
        catch (ArgumentException ex) { return BadRequest(new { message = ex.Message }); }
    }
    [HttpGet("all")]
    public async Task<IActionResult> GetAllOrders()
    {
        var orders = await orderService.GetAllOrdersAsync();
        return Ok(orders);
    }
    [HttpDelete("{orderId}")]
    public async Task<IActionResult> CancelOrder(Guid orderId)
    {
        try
        {
            await orderService.CancelOrderAsync(orderId);
            return NoContent();
        }
        catch (KeyNotFoundException ex) { return NotFound(new { message = ex.Message }); }
        catch (InvalidOperationException ex) { return BadRequest(new { message = ex.Message }); }
    }
}