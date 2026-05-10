using AdminLogsService.Events;

namespace AdminLogsService.Services
{
    public class AuditInventory : IAuditInventory
    {
        private readonly string _auditDirectory;
        private readonly ILogger<AuditInventory> _logger;

        public AuditInventory(IConfiguration configuration, ILogger<AuditInventory> logger)
        {
            _auditDirectory = configuration["Audit:Directory"] ?? "AuditLogs";
            _logger = logger;

            if (!Directory.Exists(_auditDirectory))
            {
                Directory.CreateDirectory(_auditDirectory);
            }
        }
        public async Task SaveOrderEvent(OrderEvent orderEvent)
        {
            await Task.Run(() =>
            {
                try
                {
                    _logger.LogInformation("Saving order {Action} for {OrderId}", orderEvent.Action, orderEvent.OrderId);

                    string fileName = orderEvent.Action.ToLower() switch
                    {
                        "created" => "order_created.txt",
                        "updated" => "order_updated.txt",
                        "cancelled" => "order_cancelled.txt",
                        _ => "order_events.txt"
                    };

                    var logPath = Path.Combine(_auditDirectory, fileName);
                    var timestamp = orderEvent.Timestamp.ToString("yyyy-MM-dd HH:mm:ss");
                    
                    var logEntry = $"[{timestamp}] ORDER {orderEvent.Action} - OrderId: {orderEvent.OrderId}, UserId: {orderEvent.UserId}, Status: {orderEvent.Status}, PerformedBy: {orderEvent.PerformedBy}{Environment.NewLine}";
                    
                    File.AppendAllText(logPath, logEntry);
                    _logger.LogInformation("✅ Saved order {Action} for {OrderId}", orderEvent.Action, orderEvent.OrderId);
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Error saving order {Action}", orderEvent.Action);
                    throw;
                }
            });
        }
        public async Task SaveProductEvent(ProductEvent productEvent)
        {
            await Task.Run(() =>
            {
                try
                {
                    _logger.LogInformation("Saving product {Action} for {ProductId}", productEvent.Action, productEvent.ProductId);

                    // Choose file based on action
                    string fileName = productEvent.Action.ToLower() switch
                    {
                        "created" => "product_created.txt",
                        "updated" => "product_updated.txt",
                        "deleted" => "product_deleted.txt",
                        _ => "product_events.txt"
                    };

                    var logPath = Path.Combine(_auditDirectory, fileName);
                    var timestamp = productEvent.Timestamp.ToString("yyyy-MM-dd HH:mm:ss");
                    
                    var logEntry = $"[{timestamp}] PRODUCT {productEvent.Action} - ProductId: {productEvent.ProductId}, Name: {productEvent.ProductName}, Price: {productEvent.Price}, Stock: {productEvent.Stock}, Category: {productEvent.Category}, UserId: {productEvent.UserId}";
                    
                    // Add performed by for update and delete
                    if (productEvent.Action == "UPDATED" || productEvent.Action == "DELETED")
                    {
                        logEntry += $", {productEvent.Action}By: {productEvent.PerformedBy}";
                    }
                    
                    logEntry += Environment.NewLine;
                    
                    File.AppendAllText(logPath, logEntry);
                    _logger.LogInformation("✅ Saved product {Action} for {ProductId}", productEvent.Action, productEvent.ProductId);
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Error saving product {Action}", productEvent.Action);
                    throw;
                }
            });
        }
        public async Task SaveCartEvent(CartEvent cartEvent)
        {
            await Task.Run(() =>
            {
                try
                {
                    _logger.LogInformation("Saving cart {Action} for {CartId}", cartEvent.Action, cartEvent.CartId);

                    string fileName = cartEvent.Action?.ToLower() switch
                    {
                        "created" => "cart_created.txt",
                        "updated" => "cart_updated.txt",
                        "deleted" => "cart_deleted.txt",
                        _ => "cart_events.txt"
                    };

                    var logPath = Path.Combine(_auditDirectory, fileName);
                    var timestamp = cartEvent.Timestamp.ToString("yyyy-MM-dd HH:mm:ss");
                    
                    var logEntry = $"[{timestamp}] CART {cartEvent.Action} - CartId: {cartEvent.CartId}, UserId: {cartEvent.UserId}, ItemsCount: {cartEvent.ItemsCount}, TotalAmount: {cartEvent.TotalAmount}, PerformedBy: {cartEvent.PerformedBy}{Environment.NewLine}";
                    
                    File.AppendAllText(logPath, logEntry);
                    _logger.LogInformation("✅ Saved cart {Action} for {CartId}", cartEvent.Action, cartEvent.CartId);
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Error saving cart {Action}", cartEvent.Action);
                    throw;
                }
            });
        }
        public async Task SaveReviewEvent(ReviewEvent reviewEvent)
        {
            await Task.Run(() =>
            {
                try
                {
                    _logger.LogInformation("Saving review {Action} for {ReviewId}", reviewEvent.Action, reviewEvent.ReviewId);

                    string fileName = reviewEvent.Action?.ToLower() switch
                    {
                        "created" => "review_created.txt",
                        "updated" => "review_updated.txt",
                        "deleted" => "review_deleted.txt",
                        _ => "review_events.txt"
                    };

                    var logPath = Path.Combine(_auditDirectory, fileName);
                    var timestamp = DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss");
                    
                    var logEntry = $"[{timestamp}] REVIEW {reviewEvent.Action} - ReviewId: {reviewEvent.ReviewId}, ProductId: {reviewEvent.ProductId}, UserId: {reviewEvent.UserId}, Rating: {reviewEvent.Rating}, Comment: {reviewEvent.Comment}, PerformedBy: {reviewEvent.PerformedBy}{Environment.NewLine}";
                    
                    File.AppendAllText(logPath, logEntry);
                    _logger.LogInformation("✅ Saved review {Action} for {ReviewId}", reviewEvent.Action, reviewEvent.ReviewId);
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Error saving review {Action}", reviewEvent.Action);
                    throw;
                }
            });
        }
    }
}