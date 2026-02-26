namespace TicketProductApi.Dto
{
    public class GetDtoResponse
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Description { get; set; } = null!;
        public decimal Price { get; set; }
        public int Stock { get; set; }

        // JSON column (attributs dynamiques)
        public Dictionary<string, object> Attributes { get; set; } = new();
        public string Category { get; set; } = null!;
        public Guid UserId { get; set; }



        public byte[] Image { get; set; } = Array.Empty<byte>();   // longblob
        public string Mimetype { get; set; } = null!;
        public string Filename { get; set; } = null!;
    }
}
