// Back-End/AdminLogsService/Controllers/InventoryController.cs
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace AdminLogsService.Controllers
{
    [ApiController]
    [Route("api/inventory")]
    [Authorize]
    public class InventoryController : ControllerBase
    {
        private readonly IWebHostEnvironment _environment;
        private readonly ILogger<InventoryController> _logger;

        public InventoryController(IWebHostEnvironment environment, ILogger<InventoryController> logger)
        {
            _environment = environment;
            _logger = logger;
        }

        // ========== PRODUCT CREATED LOGS ==========
        [HttpGet("products/created/logs")]
        public async Task<IActionResult> GetProductCreatedLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "product_created.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return Ok("No product created logs available yet.");
                }

                var logs = await System.IO.File.ReadAllTextAsync(logPath);
                return Ok(logs);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reading product created logs");
                return StatusCode(500, new { error = "Error reading product created logs" });
            }
        }

        // ========== PRODUCT UPDATED LOGS ==========
        [HttpGet("products/updated/logs")]
        public async Task<IActionResult> GetProductUpdatedLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "product_updated.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return Ok("No product updated logs available yet.");
                }

                var logs = await System.IO.File.ReadAllTextAsync(logPath);
                return Ok(logs);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reading product updated logs");
                return StatusCode(500, new { error = "Error reading product updated logs" });
            }
        }

        // ========== PRODUCT DELETED LOGS ==========
        [HttpGet("products/deleted/logs")]
        public async Task<IActionResult> GetProductDeletedLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "product_deleted.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return Ok("No product deleted logs available yet.");
                }

                var logs = await System.IO.File.ReadAllTextAsync(logPath);
                return Ok(logs);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reading product deleted logs");
                return StatusCode(500, new { error = "Error reading product deleted logs" });
            }
        }

        // ========== ORDER CREATED LOGS ==========
        [HttpGet("orders/created/logs")]
        public async Task<IActionResult> GetOrderCreatedLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "order_created.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return Ok("No order created logs available yet.");
                }

                var logs = await System.IO.File.ReadAllTextAsync(logPath);
                return Ok(logs);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reading order created logs");
                return StatusCode(500, new { error = "Error reading order created logs" });
            }
        }

        // ========== ORDER UPDATED LOGS ==========
        [HttpGet("orders/updated/logs")]
        public async Task<IActionResult> GetOrderUpdatedLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "order_updated.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return Ok("No order updated logs available yet.");
                }

                var logs = await System.IO.File.ReadAllTextAsync(logPath);
                return Ok(logs);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reading order updated logs");
                return StatusCode(500, new { error = "Error reading order updated logs" });
            }
        }

        // ========== ORDER CANCELLED LOGS ==========
        [HttpGet("orders/cancelled/logs")]
        public async Task<IActionResult> GetOrderCancelledLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "order_cancelled.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return Ok("No order cancelled logs available yet.");
                }

                var logs = await System.IO.File.ReadAllTextAsync(logPath);
                return Ok(logs);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reading order cancelled logs");
                return StatusCode(500, new { error = "Error reading order cancelled logs" });
            }
        }

        // ========== PRODUCT EXPORT ENDPOINTS ==========
        [HttpGet("products/created/export")]
        public async Task<IActionResult> ExportProductCreatedLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "product_created.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return NotFound(new { message = "No product created logs available" });
                }

                var logs = await System.IO.File.ReadAllBytesAsync(logPath);
                var fileName = $"product_created_{DateTime.Now:yyyyMMdd_HHmmss}.txt";
                
                return File(logs, "text/plain", fileName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error exporting product created logs");
                return StatusCode(500, new { error = "Error exporting product created logs" });
            }
        }

        [HttpGet("products/updated/export")]
        public async Task<IActionResult> ExportProductUpdatedLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "product_updated.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return NotFound(new { message = "No product updated logs available" });
                }

                var logs = await System.IO.File.ReadAllBytesAsync(logPath);
                var fileName = $"product_updated_{DateTime.Now:yyyyMMdd_HHmmss}.txt";
                
                return File(logs, "text/plain", fileName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error exporting product updated logs");
                return StatusCode(500, new { error = "Error exporting product updated logs" });
            }
        }

        [HttpGet("products/deleted/export")]
        public async Task<IActionResult> ExportProductDeletedLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "product_deleted.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return NotFound(new { message = "No product deleted logs available" });
                }

                var logs = await System.IO.File.ReadAllBytesAsync(logPath);
                var fileName = $"product_deleted_{DateTime.Now:yyyyMMdd_HHmmss}.txt";
                
                return File(logs, "text/plain", fileName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error exporting product deleted logs");
                return StatusCode(500, new { error = "Error exporting product deleted logs" });
            }
        }

        // ========== ORDER EXPORT ENDPOINTS ==========
        [HttpGet("orders/created/export")]
        public async Task<IActionResult> ExportOrderCreatedLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "order_created.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return NotFound(new { message = "No order created logs available" });
                }

                var logs = await System.IO.File.ReadAllBytesAsync(logPath);
                var fileName = $"order_created_{DateTime.Now:yyyyMMdd_HHmmss}.txt";
                
                return File(logs, "text/plain", fileName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error exporting order created logs");
                return StatusCode(500, new { error = "Error exporting order created logs" });
            }
        }

        [HttpGet("orders/updated/export")]
        public async Task<IActionResult> ExportOrderUpdatedLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "order_updated.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return NotFound(new { message = "No order updated logs available" });
                }

                var logs = await System.IO.File.ReadAllBytesAsync(logPath);
                var fileName = $"order_updated_{DateTime.Now:yyyyMMdd_HHmmss}.txt";
                
                return File(logs, "text/plain", fileName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error exporting order updated logs");
                return StatusCode(500, new { error = "Error exporting order updated logs" });
            }
        }

        [HttpGet("orders/cancelled/export")]
        public async Task<IActionResult> ExportOrderCancelledLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "order_cancelled.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return NotFound(new { message = "No order cancelled logs available" });
                }

                var logs = await System.IO.File.ReadAllBytesAsync(logPath);
                var fileName = $"order_cancelled_{DateTime.Now:yyyyMMdd_HHmmss}.txt";
                
                return File(logs, "text/plain", fileName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error exporting order cancelled logs");
                return StatusCode(500, new { error = "Error exporting order cancelled logs" });
            }
        }

        // ========== CART LOGS ==========
        [HttpGet("carts/logs")]
        public async Task<IActionResult> GetCartLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var cartsLogPath = Path.Combine(auditDirectory, "carts.txt");

                if (!System.IO.File.Exists(cartsLogPath))
                {
                    return Ok("No cart logs available yet.");
                }

                var logs = await System.IO.File.ReadAllTextAsync(cartsLogPath);
                return Ok(logs);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reading cart logs");
                return StatusCode(500, new { error = "Error reading cart logs" });
            }
        }

        // ========== REVIEW LOGS ==========
        [HttpGet("reviews/logs")]
        public async Task<IActionResult> GetReviewLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var reviewsLogPath = Path.Combine(auditDirectory, "reviews.txt");

                if (!System.IO.File.Exists(reviewsLogPath))
                {
                    return Ok("No review logs available yet.");
                }

                var logs = await System.IO.File.ReadAllTextAsync(reviewsLogPath);
                return Ok(logs);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reading review logs");
                return StatusCode(500, new { error = "Error reading review logs" });
            }
        }
        [HttpGet("carts/created/logs")]
        public async Task<IActionResult> GetCartCreatedLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "cart_created.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return Ok("No cart created logs available yet.");
                }

                var logs = await System.IO.File.ReadAllTextAsync(logPath);
                return Ok(logs);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reading cart created logs");
                return StatusCode(500, new { error = "Error reading cart created logs" });
            }
        }

        // ========== CART UPDATED LOGS ==========
        [HttpGet("carts/updated/logs")]
        public async Task<IActionResult> GetCartUpdatedLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "cart_updated.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return Ok("No cart updated logs available yet.");
                }

                var logs = await System.IO.File.ReadAllTextAsync(logPath);
                return Ok(logs);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reading cart updated logs");
                return StatusCode(500, new { error = "Error reading cart updated logs" });
            }
        }

        // ========== CART DELETED LOGS ==========
        [HttpGet("carts/deleted/logs")]
        public async Task<IActionResult> GetCartDeletedLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "cart_deleted.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return Ok("No cart deleted logs available yet.");
                }

                var logs = await System.IO.File.ReadAllTextAsync(logPath);
                return Ok(logs);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reading cart deleted logs");
                return StatusCode(500, new { error = "Error reading cart deleted logs" });
            }
        }
                // ========== CART EXPORT ==========
        [HttpGet("carts/export")]
        public async Task<IActionResult> ExportCartLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "carts.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return NotFound(new { message = "No cart logs available" });
                }

                var logs = await System.IO.File.ReadAllBytesAsync(logPath);
                var fileName = $"cart_logs_{DateTime.Now:yyyyMMdd_HHmmss}.txt";
                
                return File(logs, "text/plain", fileName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error exporting cart logs");
                return StatusCode(500, new { error = "Error exporting cart logs" });
            }
        }

        // ========== REVIEW EXPORT ==========
        [HttpGet("reviews/export")]
        public async Task<IActionResult> ExportReviewLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "reviews.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return NotFound(new { message = "No review logs available" });
                }

                var logs = await System.IO.File.ReadAllBytesAsync(logPath);
                var fileName = $"review_logs_{DateTime.Now:yyyyMMdd_HHmmss}.txt";
                
                return File(logs, "text/plain", fileName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error exporting review logs");
                return StatusCode(500, new { error = "Error exporting review logs" });
            }
        }
                // ========== REVIEW CREATED LOGS ==========
        [HttpGet("reviews/created/logs")]
        public async Task<IActionResult> GetReviewCreatedLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "review_created.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return Ok("No review created logs available yet.");
                }

                var logs = await System.IO.File.ReadAllTextAsync(logPath);
                return Ok(logs);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reading review created logs");
                return StatusCode(500, new { error = "Error reading review created logs" });
            }
        }

        // ========== REVIEW UPDATED LOGS ==========
        [HttpGet("reviews/updated/logs")]
        public async Task<IActionResult> GetReviewUpdatedLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "review_updated.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return Ok("No review updated logs available yet.");
                }

                var logs = await System.IO.File.ReadAllTextAsync(logPath);
                return Ok(logs);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reading review updated logs");
                return StatusCode(500, new { error = "Error reading review updated logs" });
            }
        }

        // ========== REVIEW DELETED LOGS ==========
        [HttpGet("reviews/deleted/logs")]
        public async Task<IActionResult> GetReviewDeletedLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "review_deleted.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return Ok("No review deleted logs available yet.");
                }

                var logs = await System.IO.File.ReadAllTextAsync(logPath);
                return Ok(logs);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reading review deleted logs");
                return StatusCode(500, new { error = "Error reading review deleted logs" });
            }
        }

        // ========== REVIEW EXPORT ==========
        [HttpGet("reviews/created/export")]
        public async Task<IActionResult> ExportReviewCreatedLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "review_created.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return NotFound(new { message = "No review created logs available" });
                }

                var logs = await System.IO.File.ReadAllBytesAsync(logPath);
                var fileName = $"review_created_{DateTime.Now:yyyyMMdd_HHmmss}.txt";
                
                return File(logs, "text/plain", fileName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error exporting review created logs");
                return StatusCode(500, new { error = "Error exporting review created logs" });
            }
        }

        [HttpGet("reviews/updated/export")]
        public async Task<IActionResult> ExportReviewUpdatedLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "review_updated.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return NotFound(new { message = "No review updated logs available" });
                }

                var logs = await System.IO.File.ReadAllBytesAsync(logPath);
                var fileName = $"review_updated_{DateTime.Now:yyyyMMdd_HHmmss}.txt";
                
                return File(logs, "text/plain", fileName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error exporting review updated logs");
                return StatusCode(500, new { error = "Error exporting review updated logs" });
            }
        }

        [HttpGet("reviews/deleted/export")]
        public async Task<IActionResult> ExportReviewDeletedLogs()
        {
            try
            {
                var auditDirectory = Path.Combine(_environment.ContentRootPath, "AuditLogs");
                var logPath = Path.Combine(auditDirectory, "review_deleted.txt");

                if (!System.IO.File.Exists(logPath))
                {
                    return NotFound(new { message = "No review deleted logs available" });
                }

                var logs = await System.IO.File.ReadAllBytesAsync(logPath);
                var fileName = $"review_deleted_{DateTime.Now:yyyyMMdd_HHmmss}.txt";
                
                return File(logs, "text/plain", fileName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error exporting review deleted logs");
                return StatusCode(500, new { error = "Error exporting review deleted logs" });
            }
        }
    }
}