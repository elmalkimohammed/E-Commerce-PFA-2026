using Microsoft.AspNetCore.Mvc;
using OrderService.Models;
using OrderService.Services;
using OrderService.DTOs;

namespace OrderService.Controllers;

[ApiController]
[Route("api/orders")]
public class OrdersController : ControllerBase
{
    private readonly IOrderService _service;

    public OrdersController(IOrderService service)
    {
        _service = service;
    }

    [HttpPost]
    public async Task<IActionResult> Create(CreateOrderDto dto)
    {
        var order = await _service.CreateOrderAsync(dto.UserId, dto.Items);
        return Ok(order);
    }

    [HttpGet("{userId}")]
    public async Task<IActionResult> Get(Guid userId)
    {
        return Ok(await _service.GetUserOrdersAsync(userId));
    }

    [HttpDelete("{orderId}")]
    public async Task<IActionResult> Cancel(Guid orderId)
    {
        await _service.CancelOrderAsync(orderId);
        return Ok();
    }

    [HttpPut("{orderId}/status")]
    public async Task<IActionResult> Update(Guid orderId, OrderStatus status)
    {
        await _service.UpdateStatusAsync(orderId, status);
        return Ok();
    }
}