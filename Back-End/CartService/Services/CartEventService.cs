using CartService.Events;

namespace CartService.Services
{
    public class CartEventService
    {
        private readonly IKafkaProducerService _kafkaProducer;

        public CartEventService(IKafkaProducerService kafkaProducer)
        {
            _kafkaProducer = kafkaProducer;
        }

        public async Task PublishCartUpdatedEvent(dynamic cartData, string performedBy)
        {
            if (cartData == null) return;
            
            var itemsCount = cartData.Items?.Count ?? 0;
            
            var cartEvent = new CartEvent
            {
                CartId = cartData.CartId,
                UserId = cartData.UserId,
                ItemsCount = itemsCount,
                TotalAmount = 0,
                Action = "UPDATED",
                Timestamp = DateTime.UtcNow,
                PerformedBy = performedBy
            };

            await _kafkaProducer.AsyncPublish("cart-events", cartEvent);
        }

        public async Task PublishCartDeletedEvent(dynamic cartData, string performedBy)
        {
            if (cartData == null) return;
            
            var cartEvent = new CartEvent
            {
                CartId = cartData.CartId,
                UserId = cartData.UserId,
                ItemsCount = 0,
                TotalAmount = 0,
                Action = "DELETED",
                Timestamp = DateTime.UtcNow,
                PerformedBy = performedBy
            };

            await _kafkaProducer.AsyncPublish("cart-events", cartEvent);
        }
    }
}