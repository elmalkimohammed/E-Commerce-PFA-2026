using Confluent.Kafka;

namespace UserProfileService.KafkaServices
{
    // Interface — SOLID (DIP)
    public interface IKafkaProducerService
    {
        Task ProduceAsync(string topic, string message);
    }

    public class KafkaProducerService : IKafkaProducerService, IDisposable
    {
        private readonly IProducer<string, string> _producer;

        public KafkaProducerService(IConfiguration configuration)
        {
            var config = new ProducerConfig
            {
                BootstrapServers = configuration["Kafka:BootstrapServers"]
            };
            _producer = new ProducerBuilder<string, string>(config).Build();
        }

        // Envoie un message vers un topic Kafka
        public async Task ProduceAsync(string topic, string message)
        {
            await _producer.ProduceAsync(topic, new Message<string, string>
            {
                Key   = Guid.NewGuid().ToString(),
                Value = message
            });
        }

        public void Dispose()
        {
            _producer?.Dispose();
        }
    }
}