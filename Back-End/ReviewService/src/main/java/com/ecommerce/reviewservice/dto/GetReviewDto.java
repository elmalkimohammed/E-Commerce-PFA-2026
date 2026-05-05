package com.ecommerce.reviewservice.dto;

import java.time.LocalDateTime;

public record GetReviewDto(
    Long reviewId,      // Long
    int productId,      // int
    int userId,         // int (pas UUID!)
    int rating,
    String comment,
    LocalDateTime createdAt,
    LocalDateTime updatedAt
) {}