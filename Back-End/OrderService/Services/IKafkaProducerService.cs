namespace OrderService.Services
{
    public interface IKafkaProducerService
    {
        Task AsyncPublish<T>(string topic, T message);
    }
}