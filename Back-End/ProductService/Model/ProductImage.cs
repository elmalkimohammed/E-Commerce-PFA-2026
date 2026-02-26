namespace TicketProductApi.Model
{
    public class ProductImage
    {
        public int Id_Image { get; set; }     
        public int Product_Id { get; set; }   // FK -> product.Id

        public byte[] Image { get; set; } = Array.Empty<byte>();   // longblob
        public string Mimetype { get; set; } = null!;
        public string Filename { get; set; } = null!;

    }
}
