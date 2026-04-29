package com.ecommerce.reviewservice.service;

import com.ecommerce.reviewservice.dto.*;
import com.ecommerce.reviewservice.entity.Review;
import com.ecommerce.reviewservice.mapper.ReviewMapper;
import com.ecommerce.reviewservice.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository repository;

    public GetReviewDto create(CreateReviewDto dto) {
        Review review = Review.builder()
                .productId(dto.productId())
                .userId(dto.userId())
                .rating(dto.rating())
                .comment(dto.comment())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();

        Review saved = repository.save(review);
        return ReviewMapper.toDto(saved);
    }

    public List<GetReviewDto> getAll() {
        return repository.findAll()
            .stream()
            .map(ReviewMapper::toDto)
            .collect(Collectors.toList());
    }

    public List<GetReviewDto> getByProduct(int productId) {
        return repository.findByProductId(productId)
            .stream()
            .map(ReviewMapper::toDto)
            .collect(Collectors.toList());
    }

    public double getRating(int productId) {
        List<Review> reviews = repository.findByProductId(productId);
        return reviews.stream()
                .mapToInt(Review::getRating)
                .average()
                .orElse(0.0);
    }

    public GetReviewDto update(Long id, UpdateReviewDto dto) {
        Review review = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Review not found with id: " + id));

        if (dto.comment() != null) review.setComment(dto.comment());
        if (dto.rating() > 0) review.setRating(dto.rating());
        review.setUpdatedAt(LocalDateTime.now());

        Review updated = repository.save(review);
        return ReviewMapper.toDto(updated);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}