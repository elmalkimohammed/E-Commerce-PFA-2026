package com.ecommerce.reviewservice.event;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReviewEvent {
    private Long reviewId;
    private int productId;
    private int userId;
    private int rating;
    private String comment;
    private String action;  // "CREATED", "UPDATED", "DELETED"
    private LocalDateTime timestamp;
    private String performedBy;
}