namespace CartService.Models
{
    public class CartItem
    {
        public Guid CartItemId { get; set; }
        public Guid CartId { get; set; }
        public int ProductId { get; set; }
        public int Stock { get; set; }
    }
}
