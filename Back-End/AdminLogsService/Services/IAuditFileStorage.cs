// Services/IAuditFileStorage.cs
using AdminLogsService.Events;
using AdminLogsService.Events.AdminLogsService.Events;
using AdminLogsService.Models;

namespace AdminLogsService.Services
{
    public interface IAuditFileStorage
    {
        Task SaveUserCreation(UserCreatedEvent userEvent);  // Changed from SaveUserRegistration
        Task UpdateUserDeletion(Events.AdminLogsService.Events.UserDeletedEvent deletedEvent);
        Task SaveProductCreation(ProductCreatedEvent productEvent);
        Task<UserCreationAudit?> GetUserById(Guid userId);
        Task<List<UserCreationAudit>> GetAllUsers();
        Task<string> ExportToCsv();
        Task GenerateStatistics();
    }
}