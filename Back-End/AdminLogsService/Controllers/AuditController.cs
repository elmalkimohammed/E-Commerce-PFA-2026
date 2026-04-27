// Controllers/AuditController.cs
using AdminLogsService.Services;
using Microsoft.AspNetCore.Mvc;

namespace UserAuditLoggingService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuditController : ControllerBase
    {
        private readonly IAuditFileStorage _auditStorage;
        private readonly ILogger<AuditController> _logger;

        public AuditController(IAuditFileStorage auditStorage, ILogger<AuditController> logger)
        {
            _auditStorage = auditStorage;
            _logger = logger;
        }

        [HttpGet("users")]
        public async Task<IActionResult> GetAllUsers()
        {
            try
            {
                var users = await _auditStorage.GetAllUsers();
                return Ok(new
                {
                    total = users.Count,
                    active = users.Count(u => u.Status == "Active"),
                    deleted = users.Count(u => u.Status == "Deleted"),
                    users
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting all users");
                return StatusCode(500, new { error = "Error retrieving audit data" });
            }
        }

        [HttpGet("users/{userId}")]
        public async Task<IActionResult> GetUserById(Guid userId)
        {
            try
            {
                var user = await _auditStorage.GetUserById(userId);
                if (user == null)
                    return NotFound(new { message = "User not found in audit log" });

                return Ok(user);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting user {UserId}", userId);
                return StatusCode(500, new { error = "Error retrieving user" });
            }
        }

        [HttpGet("export/csv")]
        public async Task<IActionResult> ExportToCsv()
        {
            try
            {
                var filePath = await _auditStorage.ExportToCsv();
                var bytes = await System.IO.File.ReadAllBytesAsync(filePath);
                var fileName = Path.GetFileName(filePath);

                return File(bytes, "text/csv", fileName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error exporting to CSV");
                return StatusCode(500, new { error = "Error exporting data" });
            }
        }

        [HttpGet("statistics")]
        public async Task<IActionResult> GetStatistics()
        {
            try
            {
                await _auditStorage.GenerateStatistics();

                var statsPath = Path.Combine("AuditLogs", $"statistics_{DateTime.Now:yyyyMMdd}.json");
                if (System.IO.File.Exists(statsPath))
                {
                    var stats = await System.IO.File.ReadAllTextAsync(statsPath);
                    return Ok(stats);
                }

                return Ok(new { message = "Statistics generating - check back soon" });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting statistics");
                return StatusCode(500, new { error = "Error generating statistics" });
            }
        }
    }
}