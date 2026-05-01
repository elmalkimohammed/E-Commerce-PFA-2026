namespace ProductService.Events
{
public class ProductEvent
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; } 
        public string Description { get; set; } 
        public float Price { get; set; }
        public int Stock { get; set; }
        public string UserId { get; set; } 
        public string Category { get; set; }
        
    }
}