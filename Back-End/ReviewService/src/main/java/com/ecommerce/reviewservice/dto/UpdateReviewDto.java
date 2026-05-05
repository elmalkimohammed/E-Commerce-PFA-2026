package com.ecommerce.reviewservice.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Max;

public record UpdateReviewDto(
    String comment,
    @Min(1) @Max(5) int rating
) {}