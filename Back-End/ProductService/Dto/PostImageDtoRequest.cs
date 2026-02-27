namespace TicketProductApi.Dto
{
    public class PostImageDtoRequest
{
    public int Product_Id { get; set; }
    public byte[] Image { get; set; } = Array.Empty<byte>();
    public string Mimetype { get; set; } = null!;
    public string Filename { get; set; } = null!;
}
}
