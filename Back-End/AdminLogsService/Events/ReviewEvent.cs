using System.Text.Json.Serialization;

namespace AdminLogsService.Events
{
    public class ReviewEvent
    {
        [JsonPropertyName("reviewId")]
        public long ReviewId { get; set; }
        
        [JsonPropertyName("productId")]
        public int ProductId { get; set; }
        
        [JsonPropertyName("userId")]
        public int UserId { get; set; }
        
        [JsonPropertyName("rating")]
        public int Rating { get; set; }
        
        [JsonPropertyName("comment")]
        public string? Comment { get; set; }
        
        [JsonPropertyName("action")]
        public string? Action { get; set; }
        
        [JsonPropertyName("timestamp")]
        public object? Timestamp { get; set; }  // Change to object to handle array format
        
        [JsonPropertyName("performedBy")]
        public string? PerformedBy { get; set; }
    }
}