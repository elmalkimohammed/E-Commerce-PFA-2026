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
    }
}