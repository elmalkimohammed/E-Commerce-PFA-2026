using ProductService.Events;
using TicketProductApi.Model;
using ProductService.Service;

namespace ProductService.Services
{
    public class ProductEventService
    {
        private readonly IKafkaProducerService _kafkaProducer;

        public ProductEventService(IKafkaProducerService kafkaProducer)
        {
            _kafkaProducer = kafkaProducer;
        }

        public async Task PublishProductCreatedEvent(Product product, int newId, string performedBy)
        {
            var productEvent = new ProductEvent
            {
                ProductId = newId,
                ProductName = product.Name,
                Description = product.Description,
                Price = (float)product.Price,
                Stock = product.Stock,
                UserId = product.UserId.ToString(),
                Category = product.Category,
                Action = "CREATED",
                Timestamp = DateTime.UtcNow,
                PerformedBy = performedBy
            };

            await _kafkaProducer.AsyncPublish("product-events", productEvent);
        }

        public async Task PublishProductUpdatedEvent(Product product, string performedBy)
        {
            var productEvent = new ProductEvent
            {
                ProductId = product.Id,
                ProductName = product.Name,
                Description = product.Description,
                Price = (float)product.Price,
                Stock = product.Stock,
                UserId = product.UserId.ToString(),
                Category = product.Category,
                Action = "UPDATED",
                Timestamp = DateTime.UtcNow,
                PerformedBy = performedBy
            };

            await _kafkaProducer.AsyncPublish("product-events", productEvent);
        }

        public async Task PublishProductDeletedEvent(ProductAndImage product, string performedBy)
        {
            var productEvent = new ProductEvent
            {
                ProductId = product.Id,
                ProductName = product.Name,
                Description = product.Description,
                Price = (float)product.Price,
                Stock = product.Stock,
                UserId = product.UserId.ToString(),
                Category = product.Category,
                Action = "DELETED",
                Timestamp = DateTime.UtcNow,
                PerformedBy = performedBy
            };

            await _kafkaProducer.AsyncPublish("product-events", productEvent);
        }
    }
}