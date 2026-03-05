using Confluent.Kafka;
using System.Text.Json;
using UserProfileService.Model;
using UserProfileService.Repository;

namespace UserProfileService.Services
{
    public class KafkaConsumerService : BackgroundService
    {
        private readonly IConfiguration _configuration;
        private readonly IServiceScopeFactory _scopeFactory;

        public KafkaConsumerService(IConfiguration configuration, IServiceScopeFactory scopeFactory)
        {
            _configuration = configuration;
            _scopeFactory = scopeFactory;
        }

        protected override Task ExecuteAsync(CancellationToken stoppingToken)
        {
            return Task.Run(() =>
            {
                var config = new ConsumerConfig
                {
                    BootstrapServers = _configuration["Kafka:BootstrapServers"],
                    GroupId = "user-profile-service",
                    AutoOffsetReset = AutoOffsetReset.Earliest
                };

                using var consumer = new ConsumerBuilder<string, string>(config).Build();
                consumer.Subscribe("user-registered");

                

                try
                {
                    while (!stoppingToken.IsCancellationRequested)
                    {
                        try
                        {
                            var result = consumer.Consume(stoppingToken);

                            var userEvent = JsonSerializer.Deserialize<UserRegisteredEvent>(result.Message.Value);

                           
                            using (var scope = _scopeFactory.CreateScope())
                            {
                                var handler = scope.ServiceProvider.GetRequiredService<IUserProfileHandler>();
                                //ajout de user a UserProfileDb.UserProfile
                                handler.AddRegistered(userEvent);
                            }

                            
                        }
                        catch (ConsumeException e)
                        {
                            Console.WriteLine($"Kafka consume error: {e.Error.Reason}");
                        }
                        catch (Exception ex)
                        {
                            Console.WriteLine($"Processing error: {ex.Message}");
                        }
                    }
                }
                finally
                {
                    consumer.Close();
                }
            }, stoppingToken);
        }
    }
}