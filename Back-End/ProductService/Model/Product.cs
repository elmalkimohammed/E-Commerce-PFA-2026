namespace TicketProductApi.Model
{
    public class Product
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
        



    }
}
