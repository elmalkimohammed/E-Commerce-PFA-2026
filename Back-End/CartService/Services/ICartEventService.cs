using CartService.Models;

namespace CartService.Services
{
    public interface ICartEventService
    {
        Task PublishCartUpdatedEvent(Cart cart, string performedBy);
        Task PublishCartClearedEvent(Cart cart, string performedBy);
    }
}