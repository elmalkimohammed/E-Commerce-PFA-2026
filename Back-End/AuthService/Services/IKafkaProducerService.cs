namespace AuthService.Services
{
    public interface IKafkaProducerService
    {
        Task AsyncPublish<T>(String topic, T message);
    }
}
