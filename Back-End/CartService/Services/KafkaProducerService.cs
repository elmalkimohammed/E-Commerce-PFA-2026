using Confluent.Kafka;
using System.Text.Json;

namespace CartService.Services
{
    public class KafkaProducerService : IKafkaProducerService, IDisposable
    {
        private readonly IProducer<string, string> _producer;
        private readonly ILogger<KafkaProducerService> _logger;

        public KafkaProducerService(IConfiguration configuration, ILogger<KafkaProducerService> logger)
        {
            _logger = logger;
            var config = new ProducerConfig
            {
                BootstrapServers = configuration["Kafka:BootstrapServers"] ?? "kafka:29092"
            };
            _producer = new ProducerBuilder<string, string>(config).Build();
            _logger.LogInformation("KafkaProducerService initialized for CartService");
        }

        public async Task AsyncPublish<T>(string topic, T message)
        {
            try
            {
                var json = JsonSerializer.Serialize(message);
                await _producer.ProduceAsync(topic, new Message<string, string>
                {
                    Key = Guid.NewGuid().ToString(),
                    Value = json
                });
                _logger.LogInformation("✅ Published message to topic {Topic}", topic);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "❌ Failed to publish message to topic {Topic}", topic);
                throw;
            }
        }

        public void Dispose()
        {
            _producer?.Dispose();
        }
    }
}