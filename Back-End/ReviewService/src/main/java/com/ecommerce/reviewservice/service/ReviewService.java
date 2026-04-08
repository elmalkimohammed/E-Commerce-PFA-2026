package com.ecommerce.reviewservice.service;

import com.ecommerce.reviewservice.dto.*;
import com.ecommerce.reviewservice.entity.Review;
import com.ecommerce.reviewservice.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository repository;


    public Review create(CreateReviewDto dto) {
        Review review = Review.builder()
                .productId(dto.productId())
                .userId(dto.userId())
                .rating(dto.rating())
                .comment(dto.comment())
                .createdAt(LocalDateTime.now())
                .build();

        return repository.save(review);
    }

    
    public List<Review> getByProduct(int productId) {
        return repository.findByProductId(productId);
    }

    
    public double getRating(int productId) {
        List<Review> reviews = repository.findByProductId(productId);

        return reviews.stream()
                .mapToInt(Review::getRating)
                .average()
                .orElse(0.0);
    }

    
    public Review update(UUID id, UpdateReviewDto dto) {
        Review review = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Review not found"));

        if (dto.rating() != null && dto.rating() > 0) {
            review.setRating(dto.rating());
        }
        
        if (dto.comment() != null) {
            review.setComment(dto.comment());
        }

        return repository.save(review);
    }

    
    public void delete(UUID id) {
        repository.deleteById(id);
    }
}