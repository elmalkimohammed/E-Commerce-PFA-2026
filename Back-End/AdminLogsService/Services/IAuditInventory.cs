using AdminLogsService.Events;

namespace AdminLogsService.Services
{
    public interface IAuditInventory
    {
        Task SaveProductEvent(ProductEvent productEvent);
    }
}