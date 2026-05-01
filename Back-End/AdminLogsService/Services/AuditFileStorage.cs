// Services/AuditFileStorage.cs
using AdminLogsService.Events;
using AdminLogsService.Events.AdminLogsService.Events;
using AdminLogsService.Models;
using System.Text;
using System.Text.Json;

namespace AdminLogsService.Services
{
    public class AuditFileStorage : IAuditFileStorage
    {
        private readonly string _auditDirectory;
        private readonly string _auditFilePath;
        private readonly ILogger<AuditFileStorage> _logger;
        private readonly object _fileLock = new object();

        public AuditFileStorage(IConfiguration configuration, ILogger<AuditFileStorage> logger)
        {
            _auditDirectory = configuration["Audit:Directory"] ?? "AuditLogs";
            _auditFilePath = Path.Combine(_auditDirectory, "user_creations.json");
            _logger = logger;

            // Ensure directory exists
            if (!Directory.Exists(_auditDirectory))
            {
                Directory.CreateDirectory(_auditDirectory);
            }

            // Initialize file if it doesn't exist
            if (!File.Exists(_auditFilePath))
            {
                File.WriteAllText(_auditFilePath, "[]");
            }
        }

        // ✅ Implement SaveUserCreation (was SaveUserRegistration)
        public async Task SaveUserCreation(UserCreatedEvent userEvent)
        {
            await Task.Run(() =>
            {
                lock (_fileLock)
                {
                    try
                    {
                        _logger.LogInformation("Saving user creation for {UserId}", userEvent.UserId);

                        // Read existing data
                        var users = ReadAllUsersFromFile();

                        // Check if user already exists
                        var existingUser = users.FirstOrDefault(u => u.UserId == userEvent.UserId);
                        if (existingUser != null)
                        {
                            _logger.LogWarning("User {UserId} already exists in audit log", userEvent.UserId);
                            return;
                        }

                        // Create audit record
                        var auditRecord = new UserCreationAudit
                        {
                            UserId = userEvent.UserId,
                            Email = userEvent.Email ?? "UNKNOWN",
                            Role = userEvent.Role ?? "UNKNOWN",
                            CreatedAt = userEvent.CreatedAt,
                            Status = "Active",
                            Metadata = new Dictionary<string, object>
                            {
                                ["service"] = "AuthService",
                                ["audit_created_at"] = DateTime.UtcNow,
                                ["audit_version"] = "1.0"
                            }
                        };

                        // Add new user
                        users.Add(auditRecord);

                        // Write back to file
                        WriteAllUsersToFile(users);

                        _logger.LogInformation("✅ Saved creation audit for user {UserId} ({Email})",
                            userEvent.UserId, userEvent.Email);

                        // Also append to a separate log file for easy viewing
                        AppendToHumanReadableLog(auditRecord);
                    }
                    catch (Exception ex)
                    {
                        _logger.LogError(ex, "Error saving user creation audit");
                        throw;
                    }
                }
            });
        }

        // ✅ Implement UpdateUserDeletion
        public async Task UpdateUserDeletion(Events.AdminLogsService.Events.UserDeletedEvent deletedEvent)
        {
            await Task.Run(() =>
            {
                lock (_fileLock)
                {
                    try
                    {
                        _logger.LogInformation("Updating deletion status for user {UserId}", deletedEvent.UserId);

                        var users = ReadAllUsersFromFile();
                        var user = users.FirstOrDefault(u => u.UserId == deletedEvent.UserId);

                        if (user != null)
                        {
                            user.Status = "Deleted";
                            user.DeletedAt = deletedEvent.DeletedAt;
                            user.DeletedBy = deletedEvent.DeletedBy;
                            user.Metadata["deleted_at"] = deletedEvent.DeletedAt;
                            user.Metadata["deleted_by"] = deletedEvent.DeletedBy;

                            WriteAllUsersToFile(users);

                            _logger.LogInformation("✅ Updated deletion audit for user {UserId} (marked as Deleted)",
                                deletedEvent.UserId);

                            AppendToDeletionLog(user, deletedEvent);
                        }
                        else
                        {
                            _logger.LogWarning("User {UserId} not found in audit log for deletion", deletedEvent.UserId);

                            // Create a record even if not found (for completeness)
                            var deletedUserRecord = new UserCreationAudit
                            {
                                UserId = deletedEvent.UserId,
                                Email = "UNKNOWN",
                                Role = "UNKNOWN",
                                CreatedAt = deletedEvent.DeletedAt,
                                Status = "Deleted",
                                DeletedAt = deletedEvent.DeletedAt,
                                DeletedBy = deletedEvent.DeletedBy,
                                Metadata = new Dictionary<string, object>
                                {
                                    ["note"] = "User was deleted but registration record not found in audit",
                                    ["deleted_at"] = deletedEvent.DeletedAt
                                }
                            };
                            users.Add(deletedUserRecord);
                            WriteAllUsersToFile(users);
                        }
                    }
                    catch (Exception ex)
                    {
                        _logger.LogError(ex, "Error updating user deletion audit");
                        throw;
                    }
                }
            });
        }

        // ✅ Implement SaveProductCreation
        public async Task SaveProductCreation(ProductCreatedEvent productEvent)
        {
            await Task.Run(() =>
            {
                try
                {
                    _logger.LogInformation("Saving product creation for {ProductId}", productEvent.ProductId);

                    var logPath = Path.Combine(_auditDirectory, "products.txt");
                    var logEntry = $"[{DateTime.Now:yyyy-MM-dd HH:mm:ss}] PRODUCT CREATED - ProductId: {productEvent.ProductId}, Name: {productEvent.ProductName}, Price: {productEvent.Price}, Stock: {productEvent.Stock}, Category: {productEvent.Category}, UserId: {productEvent.UserId}{Environment.NewLine}";
                    
                    File.AppendAllText(logPath, logEntry);

                    _logger.LogInformation("✅ Saved product creation for {ProductId}", productEvent.ProductId);
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Error saving product creation");
                    throw;
                }
            });
        }

        // ✅ Implement GetUserById
        public Task<UserCreationAudit?> GetUserById(Guid userId)
        {
            return Task.Run(() =>
            {
                lock (_fileLock)
                {
                    var users = ReadAllUsersFromFile();
                    return users.FirstOrDefault(u => u.UserId == userId);
                }
            });
        }

        // ✅ Implement GetAllUsers
        public Task<List<UserCreationAudit>> GetAllUsers()
        {
            return Task.Run(() =>
            {
                lock (_fileLock)
                {
                    return ReadAllUsersFromFile();
                }
            });
        }

        // ✅ Implement ExportToCsv
        public async Task<string> ExportToCsv()
        {
            return await Task.Run(() =>
            {
                lock (_fileLock)
                {
                    var users = ReadAllUsersFromFile();
                    var csv = new StringBuilder();

                    // Add header
                    csv.AppendLine("UserId,Email,Role,CreatedAt,Status,DeletedAt,DeletedBy");

                    // Add data
                    foreach (var user in users)
                    {
                        csv.AppendLine($"{user.UserId},{user.Email},{user.Role},{user.CreatedAt:yyyy-MM-dd HH:mm:ss},{user.Status},{user.DeletedAt?.ToString("yyyy-MM-dd HH:mm:ss")},{user.DeletedBy}");
                    }

                    var csvPath = Path.Combine(_auditDirectory, $"user_export_{DateTime.Now:yyyyMMdd_HHmmss}.csv");
                    File.WriteAllText(csvPath, csv.ToString());

                    _logger.LogInformation("Exported {Count} users to CSV: {Path}", users.Count, csvPath);
                    return csvPath;
                }
            });
        }

        // ✅ Implement GenerateStatistics
        public async Task GenerateStatistics()
        {
            await Task.Run(() =>
            {
                lock (_fileLock)
                {
                    var users = ReadAllUsersFromFile();
                    var stats = new
                    {
                        GeneratedAt = DateTime.UtcNow,
                        TotalCreations = users.Count,
                        ActiveUsers = users.Count(u => u.Status == "Active"),
                        DeletedUsers = users.Count(u => u.Status == "Deleted"),
                        CreationsByDay = users.GroupBy(u => u.CreatedAt.Date)
                            .Select(g => new { Date = g.Key, Count = g.Count() })
                            .OrderByDescending(g => g.Date)
                            .Take(30),
                        CreationsByRole = users.GroupBy(u => u.Role)
                            .Select(g => new { Role = g.Key, Count = g.Count() })
                    };

                    var statsJson = JsonSerializer.Serialize(stats, new JsonSerializerOptions { WriteIndented = true });
                    var statsPath = Path.Combine(_auditDirectory, $"statistics_{DateTime.Now:yyyyMMdd}.json");
                    File.WriteAllText(statsPath, statsJson);

                    _logger.LogInformation("Generated statistics: {TotalUsers} total, {ActiveUsers} active, {DeletedUsers} deleted",
                        stats.TotalCreations, stats.ActiveUsers, stats.DeletedUsers);
                }
            });
        }

        // Private helper methods
        private List<UserCreationAudit> ReadAllUsersFromFile()
        {
            var json = File.ReadAllText(_auditFilePath);
            return JsonSerializer.Deserialize<List<UserCreationAudit>>(json) ?? new List<UserCreationAudit>();
        }

        private void WriteAllUsersToFile(List<UserCreationAudit> users)
        {
            var json = JsonSerializer.Serialize(users, new JsonSerializerOptions { WriteIndented = true });
            File.WriteAllText(_auditFilePath, json);
        }

        private void AppendToHumanReadableLog(UserCreationAudit user)
        {
            var logPath = Path.Combine(_auditDirectory, "creation_log.txt");
            var logEntry = $"[{DateTime.Now:yyyy-MM-dd HH:mm:ss}] CREATED - UserId: {user.UserId}, Email: {user.Email}, Role: {user.Role}";
            File.AppendAllText(logPath, logEntry + Environment.NewLine);
        }

        private void AppendToDeletionLog(UserCreationAudit user, Events.AdminLogsService.Events.UserDeletedEvent deletedEvent)
        {
            var logPath = Path.Combine(_auditDirectory, "deletion_log.txt");
            var logEntry = $"[{DateTime.Now:yyyy-MM-dd HH:mm:ss}] DELETED - UserId: {user.UserId}, Email: {user.Email}, DeletedBy: {deletedEvent.DeletedBy}";
            File.AppendAllText(logPath, logEntry + Environment.NewLine);
        }
    }
}