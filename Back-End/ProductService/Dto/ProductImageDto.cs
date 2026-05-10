namespace TicketProductApi.Dto
{
    public class ProductImageDto
    {
        public int Id_Image { get; set; }
        public byte[] Image { get; set; } = Array.Empty<byte>();
        public string Mimetype { get; set; } = null!;
        public string Filename { get; set; } = null!;
    }
}
