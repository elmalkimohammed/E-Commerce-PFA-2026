package com.ecommerce.reviewservice.dto;

import jakarta.validation.constraints.*;
import java.util.UUID;

public record CreateReviewDto(
        @NotNull int productId,
        @NotNull UUID userId,
        @Min(1) @Max(5) int rating,
        String comment
) {}