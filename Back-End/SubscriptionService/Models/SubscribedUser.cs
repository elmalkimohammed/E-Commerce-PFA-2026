using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SubscriptionService.Models;

[Table("SubscribedUsers")]
public class SubscribedUser
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int SubId { get; set; }
    
    [Required]
    public Guid UserId { get; set; }
    
    [Required]
    public int PlanId { get; set; }
    
    [Required]
    public DateTime StartDate { get; set; }
    
    [Required]
    public DateTime EndDate { get; set; }
    
    [Required]
    [MaxLength(20)]
    public string Status { get; set; } = "Active";
    
    // Foreign key
    [ForeignKey("PlanId")]
    public SubscriptionPlan? SubscriptionPlan { get; set; }
}