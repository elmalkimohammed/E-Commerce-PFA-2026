package com.ecommerce.reviewservice.dto;

import jakarta.validation.constraints.*;

public record UpdateReviewDto(
        @Min(1) @Max(5) Integer rating,
        String comment
) {}