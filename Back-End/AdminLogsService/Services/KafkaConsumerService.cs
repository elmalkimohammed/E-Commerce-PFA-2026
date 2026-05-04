using AdminLogsService.Events;
using AdminLogsService.Events.AdminLogsService.Events;
using AdminLogsService.Services;
using Confluent.Kafka;
using System.Text.Json;

namespace UserAuditLoggingService.Services
{
    public class KafkaAuditConsumer : BackgroundService
    {
        private readonly IConfiguration _configuration;
        private readonly IServiceScopeFactory _scopeFactory;
        private readonly ILogger<KafkaAuditConsumer> _logger;

        public KafkaAuditConsumer(
            IConfiguration configuration,
            IServiceScopeFactory scopeFactory,
            ILogger<KafkaAuditConsumer> logger)
        {
            _configuration = configuration;
            _scopeFactory = scopeFactory;
            _logger = logger;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("🚀 Starting Kafka Audit Consumer...");

            var config = new ConsumerConfig
            {
                BootstrapServers = _configuration["Kafka:BootstrapServers"],
                GroupId = "user-audit-logging-service-v3",
                AutoOffsetReset = AutoOffsetReset.Earliest,
                EnableAutoCommit = false
            };

            using var consumer = new ConsumerBuilder<string, string>(config).Build();

            // ADDED: order-events to subscription
            consumer.Subscribe(new[] { "user-created", "user-deleted", "product-events", "order-events" }); 

            _logger.LogInformation("✅ Subscribed to topics: user-created, user-deleted, product-events, order-events");

            try
            {
                while (!stoppingToken.IsCancellationRequested)
                {
                    try
                    {
                        var result = consumer.Consume(stoppingToken);

                        _logger.LogInformation("📨 Received message from topic: {Topic}", result.Topic);
                        switch (result.Topic)
                        {
                            case "user-created":
                                await HandleUserCreated(result.Message.Value);
                                break;
                            case "user-deleted":
                                await HandleUserDeleted(result.Message.Value);
                                break;
                            case "product-events":
                                await HandleProductEvent(result.Message.Value);
                                break;
                            case "order-events":  // ADDED
                                await HandleOrderEvent(result.Message.Value);
                                break;
                        }

                        consumer.Commit(result);
                        _logger.LogInformation("✅ Committed message from {Topic}", result.Topic);
                    }
                    catch (ConsumeException e)
                    {
                        _logger.LogError(e, "❌ Kafka consume error: {Reason}", e.Error.Reason);
                        await Task.Delay(1000, stoppingToken);
                    }
                    catch (Exception ex)
                    {
                        _logger.LogError(ex, "❌ Unexpected error");
                        await Task.Delay(1000, stoppingToken);
                    }
                }
            }
            finally
            {
                consumer.Close();
                _logger.LogInformation("🛑 Kafka consumer closed");
            }
        }

        private async Task HandleUserCreated(string messageValue)
        {
            try
            {
                _logger.LogInformation("📝 Processing user-created event");

                var userEvent = JsonSerializer.Deserialize<UserCreatedEvent>(messageValue);
                if (userEvent == null)
                {
                    _logger.LogError("Failed to deserialize user-created event");
                    return;
                }

                _logger.LogInformation("User created: {UserId}, {Email}", userEvent.UserId, userEvent.Email);

                using var scope = _scopeFactory.CreateScope();
                var storage = scope.ServiceProvider.GetRequiredService<IAuditFileStorage>();
                await storage.SaveUserCreation(userEvent);

                _logger.LogInformation("✅ Saved user creation for {UserId}", userEvent.UserId);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error handling user-created event");
            }
        }

        private async Task HandleUserDeleted(string messageValue)
        {
            try
            {
                _logger.LogInformation("📝 Processing user-deleted event");

                var deletedEvent = JsonSerializer.Deserialize<UserDeletedEvent>(messageValue);
                if (deletedEvent == null)
                {
                    _logger.LogError("Failed to deserialize user-deleted event");
                    return;
                }

                _logger.LogInformation("User deleted: {UserId}", deletedEvent.UserId);

                using var scope = _scopeFactory.CreateScope();
                var storage = scope.ServiceProvider.GetRequiredService<IAuditFileStorage>();
                await storage.UpdateUserDeletion(deletedEvent);

                _logger.LogInformation("✅ Updated deletion status for {UserId}", deletedEvent.UserId);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error handling user-deleted event");
            }
        }

        private async Task HandleProductEvent(string messageValue)
        {
            try
            {
                _logger.LogInformation("📝 Processing product event");
                
                var productEvent = JsonSerializer.Deserialize<ProductEvent>(messageValue);
                if (productEvent == null)
                {
                    _logger.LogError("Failed to deserialize product event");
                    return;
                }

                _logger.LogInformation("Product {Action}: {ProductId}, {ProductName}", 
                    productEvent.Action, productEvent.ProductId, productEvent.ProductName);

                using var scope = _scopeFactory.CreateScope();
                var auditInventory = scope.ServiceProvider.GetRequiredService<IAuditInventory>();
                await auditInventory.SaveProductEvent(productEvent);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error handling product event");
            }
        }

        // ========== ADDED: ORDER EVENT HANDLER ==========
        private async Task HandleOrderEvent(string messageValue)
        {
            try
            {
                _logger.LogInformation("📝 Processing order event");
                
                var orderEvent = JsonSerializer.Deserialize<OrderEvent>(messageValue);
                if (orderEvent == null)
                {
                    _logger.LogError("Failed to deserialize order event");
                    return;
                }

                _logger.LogInformation("Order {Action}: {OrderId}, UserId: {UserId}, Status: {Status}", 
                    orderEvent.Action, orderEvent.OrderId, orderEvent.UserId, orderEvent.Status);

                using var scope = _scopeFactory.CreateScope();
                var auditInventory = scope.ServiceProvider.GetRequiredService<IAuditInventory>();
                await auditInventory.SaveOrderEvent(orderEvent);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error handling order event");
            }
        }
    }
}