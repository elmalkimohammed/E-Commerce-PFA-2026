package com.ecommerce.reviewservice.mapper;

import com.ecommerce.reviewservice.dto.GetReviewDto;
import com.ecommerce.reviewservice.entity.Review;

public class ReviewMapper {
    
    public static GetReviewDto toDto(Review review) {
        if (review == null) {
            return null;
        }
        
        return new GetReviewDto(
            review.getReviewId(),
            review.getProductId(),
            review.getUserId(),
            review.getRating(),
            review.getComment(),
            review.getCreatedAt(),
            review.getUpdatedAt()
        );
    }
}