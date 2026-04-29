package com.ecommerce.reviewservice.dto;

import jakarta.validation.constraints.*;

public record CreateReviewDto(
        @NotNull int productId,  // int
        @NotNull int userId,      // int (pas UUID!)
        @Min(1) @Max(5) int rating,
        String comment
) {}