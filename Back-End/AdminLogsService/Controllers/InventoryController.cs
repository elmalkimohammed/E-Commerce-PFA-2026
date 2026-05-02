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

        // ========== EXPORT ENDPOINTS ==========
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

        // ========== CART LOGS (if needed) ==========
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

        // ========== REVIEW LOGS (if needed) ==========
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
    }
}