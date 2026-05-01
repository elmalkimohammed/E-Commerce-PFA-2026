namespace ProductService.Service
{
    public interface IKafkaProducerService
    {
        Task AsyncPublish<T>(String topic, T message);
    }
}
