package com.ecommerce.reviewservice.controller;

import com.ecommerce.reviewservice.dto.*;
import org.springframework.http.ResponseEntity;
import com.ecommerce.reviewservice.entity.Review;
import com.ecommerce.reviewservice.service.ReviewService;
import com.ecommerce.reviewservice.service.ReviewEventService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Slf4j
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService service;
    private final ReviewEventService reviewEventService;

    private String getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getPrincipal() instanceof Jwt) {
            Jwt jwt = (Jwt) authentication.getPrincipal();
            String email = jwt.getClaimAsString("email");
            if (email == null) {
                email = jwt.getClaimAsString("sub");
            }
            return email != null ? email : "Unknown";
        }
        return "Unknown";
    }

    @PostMapping
    public GetReviewDto create(@RequestBody @Valid CreateReviewDto dto) {
        GetReviewDto review = service.create(dto);
        Review reviewEntity = service.getReviewEntity(review.reviewId());  // Fixed: use reviewId()
        reviewEventService.publishReviewCreatedEvent(reviewEntity, getCurrentUser());
        return review;
    }
    
    @GetMapping("/all")
    public List<GetReviewDto> getAll() {
        return service.getAll();
    }
    
    @GetMapping("/product/{productId}")
    public List<GetReviewDto> getByProduct(@PathVariable int productId) {
        return service.getByProduct(productId);
    }

    @GetMapping("/product/{productId}/rating")
    public double getRating(@PathVariable int productId) {
        return service.getRating(productId);
    }

    @PutMapping("/{id}")
    public GetReviewDto update(@PathVariable Long id, @RequestBody UpdateReviewDto dto) {
        GetReviewDto review = service.update(id, dto);
        Review reviewEntity = service.getReviewEntity(id);
        reviewEventService.publishReviewUpdatedEvent(reviewEntity, getCurrentUser());
        return review;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        Review reviewEntity = service.getReviewEntity(id);
        if (reviewEntity != null) {
            reviewEventService.publishReviewDeletedEvent(reviewEntity, getCurrentUser());
        }
        service.delete(id);
    }
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Review>> getByUserId(@PathVariable UUID userId) {
        return ResponseEntity.ok(service.GetByUserId(userId));
    }

}