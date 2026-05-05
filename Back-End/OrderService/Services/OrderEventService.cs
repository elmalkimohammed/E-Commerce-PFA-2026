using OrderService.Events;
using OrderService.Entities;

namespace OrderService.Services
{
    public class OrderEventService
    {
        private readonly IKafkaProducerService _kafkaProducer;
        private readonly ILogger<OrderEventService> _logger;

        public OrderEventService(IKafkaProducerService kafkaProducer, ILogger<OrderEventService> logger)
        {
            _kafkaProducer = kafkaProducer;
            _logger = logger;
        }

        public async Task PublishOrderCreatedEvent(Order order, string performedBy)
        {
            var orderEvent = new OrderEvent
            {
                OrderId = order.OrderId,
                UserId = order.UserId,
                Status = order.Status.ToString(),
                Action = "CREATED",
                Timestamp = DateTime.UtcNow,
                PerformedBy = performedBy
            };

            await _kafkaProducer.AsyncPublish("order-events", orderEvent);
            _logger.LogInformation("Published order created event for {OrderId}", order.OrderId);
        }

        public async Task PublishOrderUpdatedEvent(Order order, string performedBy)
        {
            var orderEvent = new OrderEvent
            {
                OrderId = order.OrderId,
                UserId = order.UserId,
                Status = order.Status.ToString(),
                Action = "UPDATED",
                Timestamp = DateTime.UtcNow,
                PerformedBy = performedBy
            };

            await _kafkaProducer.AsyncPublish("order-events", orderEvent);
            _logger.LogInformation("Published order updated event for {OrderId}", order.OrderId);
        }

        public async Task PublishOrderCancelledEvent(Order order, string performedBy)
        {
            var orderEvent = new OrderEvent
            {
                OrderId = order.OrderId,
                UserId = order.UserId,
                Status = "CANCELLED",
                Action = "CANCELLED",
                Timestamp = DateTime.UtcNow,
                PerformedBy = performedBy
            };

            await _kafkaProducer.AsyncPublish("order-events", orderEvent);
            _logger.LogInformation("Published order cancelled event for {OrderId}", order.OrderId);
        }
    }
}