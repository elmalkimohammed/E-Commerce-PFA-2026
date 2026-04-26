using Confluent.Kafka;
using System.Text.Json;
using UserProfileService.Events;
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

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            var config = new ConsumerConfig
            {
                BootstrapServers = _configuration["Kafka:BootstrapServers"],
                GroupId = "user-profile-service",
                AutoOffsetReset = AutoOffsetReset.Earliest,
                EnableAutoCommit = false
            };

            using var consumer = new ConsumerBuilder<string, string>(config).Build();

            // ✅ Subscribe to BOTH topics
            consumer.Subscribe(new[] { "user-registered", "user-deleted" });

            Console.WriteLine("✅ Kafka Consumer subscribed to: user-registered, user-deleted");

            try
            {
                while (!stoppingToken.IsCancellationRequested)
                {
                    try
                    {
                        var result = consumer.Consume(stoppingToken);

                        // Handle based on topic
                        if (result.Topic == "user-registered")
                        {
                            Console.WriteLine($"📨 Received user-registered event");
                            var userEvent = JsonSerializer.Deserialize<UserRegisteredEvent>(result.Message.Value);

                            if (userEvent != null)
                            {
                                using (var scope = _scopeFactory.CreateScope())
                                {
                                    var handler = scope.ServiceProvider.GetRequiredService<IUserProfileHandler>();
                                    await handler.AddRegistered(userEvent); // ✅ Use await
                                }
                                Console.WriteLine($"✅ Processed user registration for UserId: {userEvent.UserId}");
                            }
                        }
                        else if (result.Topic == "user-deleted")
                        {
                            Console.WriteLine($"📨 Received user-deleted event");
                            var userDeletedEvent = JsonSerializer.Deserialize<UserDeletedEvent>(result.Message.Value);

                            if (userDeletedEvent != null)
                            {
                                using (var scope = _scopeFactory.CreateScope())
                                {
                                    var handler = scope.ServiceProvider.GetRequiredService<IUserProfileHandler>();
                                    await handler.DeleteUserProfile(userDeletedEvent.UserId); // ✅ Use await
                                }
                                Console.WriteLine($"✅ Processed user deletion for UserId: {userDeletedEvent.UserId}");
                            }
                        }

                        // Commit after successful processing
                        consumer.Commit(result);
                        Console.WriteLine($"✅ Committed offset for {result.Topic}");
                    }
                    catch (ConsumeException e)
                    {
                        Console.WriteLine($"❌ Kafka consume error: {e.Error.Reason}");
                        await Task.Delay(1000, stoppingToken);
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"❌ Processing error: {ex.Message}");
                        Console.WriteLine($"Stack trace: {ex.StackTrace}");
                        await Task.Delay(1000, stoppingToken);
                    }
                }
            }
            finally
            {
                consumer.Close();
                Console.WriteLine("🛑 Kafka consumer closed");
            }
        }
    }
}