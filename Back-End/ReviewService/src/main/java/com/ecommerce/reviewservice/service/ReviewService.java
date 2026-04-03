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

    // ✅ POST → add review
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

    // ✅ GET → all comments of product
    public List<Review> getByProduct(UUID productId) {
        return repository.findByProductId(productId);
    }

    // ✅ GET → rating (average)
    public double getRating(UUID productId) {
        List<Review> reviews = repository.findByProductId(productId);

        return reviews.stream()
                .mapToInt(Review::getRating)
                .average()
                .orElse(0.0);
    }

    // ✅ PUT → update
    public Review update(UUID id, UpdateReviewDto dto) {
        Review review = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Review not found"));

        if (dto.comment() != null) review.setComment(dto.comment());
        if (dto.rating() > 0) review.setRating(dto.rating());

        return repository.save(review);
    }

    // ✅ DELETE
    public void delete(UUID id) {
        repository.deleteById(id);
    }
}