using Confluent.Kafka;
using System.Text.Json;

namespace AuthService.Services
{
    public class KafkaProducerService : IKafkaProducerService /* For Implementing The Interface's Method */, IDisposable  /* For CleanUps */
    {
        // The One Responsable For Producing Messages To Kafka Topics
        private readonly IProducer<String, String> _producer;

        // Constructor To Initialize The Kafka Producer With The Required Configurations
        public KafkaProducerService(IConfiguration configuration)
        {
            // Create A Kafka Producer Configuration Object With The Necessary Settings
            var config = new ProducerConfig
            {
                BootstrapServers = configuration["Kafka:BootstrapServers"]
            };

            // Initialize The Kafka Producer Using The Configuration
            this._producer = new ProducerBuilder<String, String>(config).Build();
        }
        public async Task AsyncPublish<T>(String topic, T message) 
        {
            // Serialize The Message To JSON Format Before Sending It To The Kafka Topic
            var json = JsonSerializer.Serialize(message);

            // Produce The Message To The Specified Kafka Topic Asynchronously
            await this._producer.ProduceAsync
            (
                topic, new Message<String, String>
                {
                    Key = Guid.NewGuid().ToString(), // Generate A Unique Key For The Message
                    Value = json // The Serialized Message As The Value
                }
            );
        }

        public void Dispose()
        {
            _producer.Dispose();
        }
    }
}
