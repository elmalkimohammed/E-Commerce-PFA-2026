package com.ecommerce.reviewservice.event;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReviewEvent {
    private UUID reviewId;
    private int productId;
    private UUID userId;
    private int rating;
    private String comment;
    private String action;  // "CREATED", "UPDATED", "DELETED"
    private LocalDateTime timestamp;
    private String performedBy;
}