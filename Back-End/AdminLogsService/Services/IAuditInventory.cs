using AdminLogsService.Events;

namespace AdminLogsService.Services
{
    public interface IAuditInventory
    {
        Task SaveProductEvent(ProductEvent productEvent);
        Task SaveOrderEvent(OrderEvent orderEvent); 
        Task SaveCartEvent(CartEvent cartEvent); 
        Task SaveReviewEvent(ReviewEvent reviewEvent);  
    }
}