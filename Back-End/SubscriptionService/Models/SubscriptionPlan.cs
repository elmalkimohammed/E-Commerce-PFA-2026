using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SubscriptionService.Models;

[Table("SubscriptionPlans")]
public class SubscriptionPlan
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int PlanId { get; set; }
    
    [Required]
    [MaxLength(50)]
    public string Name { get; set; } = string.Empty;
    
    [Required]
    [Column(TypeName = "decimal(18,2)")]
    public decimal Price { get; set; }
    
    [Required]
    [MaxLength(20)]
    public string Duration { get; set; } = string.Empty;
    
    [Required]
    public int MaxProducts { get; set; }
    
    // Navigation property
    public ICollection<SubscribedUser> SubscribedUsers { get; set; } = new List<SubscribedUser>();
}