package com.ecommerce.reviewservice.dto;

import jakarta.validation.constraints.*;

import java.util.UUID;

public record CreateReviewDto(
        @NotNull int productId,  // int
        @NotNull UUID userId,      // int (pas UUID!)
        @Min(1) @Max(5) int rating,
        String comment
) {}