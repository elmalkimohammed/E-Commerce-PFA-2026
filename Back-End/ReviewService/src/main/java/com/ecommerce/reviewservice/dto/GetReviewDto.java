package com.ecommerce.reviewservice.dto;

import java.time.LocalDateTime;
import java.util.UUID;

public record GetReviewDto(
        UUID reviewId,      // Long
        int productId,      // int
        UUID userId,         // int (pas UUID!)
        int rating,
        String comment,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {}