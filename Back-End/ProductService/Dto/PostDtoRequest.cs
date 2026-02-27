using System.ComponentModel.DataAnnotations;

namespace TicketProductApi.Dto
{
    public class PostDtoRequest
    {
        [Required]
        public string Name { get; set; } = null!;

        public string Description { get; set; } = null!;
        [Required]

        public decimal Price { get; set; }
        [Required]
        
        public int Stock { get; set; } 

        // JSON column (attributs dynamiques)
        public Dictionary<string, object> Attributes { get; set; } = new();
        public string Category { get; set; } = null!;
        public Guid UserId { get; set; }
        

    }
}
