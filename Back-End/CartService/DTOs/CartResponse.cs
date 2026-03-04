namespace CartService.DTOs
{
    public class CartResponse
    {
        public class AllCartResponse    
        {
            public Guid CartId { get; set; }
            public Guid UserId { get; set; }
            public List<CartItemDto> Items { get; set; }
        }

        public class CartItemDto
        {
            public int ProductId { get; set; }
            public int Stock { get; set; }  
        }
    }
}
