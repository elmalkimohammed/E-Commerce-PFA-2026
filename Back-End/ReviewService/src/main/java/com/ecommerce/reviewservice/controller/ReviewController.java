package com.ecommerce.reviewservice.controller;

import com.ecommerce.reviewservice.dto.*;
import com.ecommerce.reviewservice.entity.Review;
import com.ecommerce.reviewservice.service.ReviewService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService service;

    
    @PostMapping
    public Review create(@RequestBody @Valid CreateReviewDto dto) {
        return service.create(dto);
    }

    
    @GetMapping("/product/{productId}")
    public List<Review> getByProduct(@PathVariable int productId) {
        return service.getByProduct(productId);
    }

    
    @GetMapping("/product/{productId}/rating")
    public double getRating(@PathVariable int productId) {
        return service.getRating(productId);
    }

    
    @PutMapping("/{id}")
    public Review update(@PathVariable UUID id,
                         @RequestBody UpdateReviewDto dto) {
        return service.update(id, dto);
    }

    
    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        service.delete(id);
    }
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Review>> getByUserId(@PathVariable UUID userId) {
        return ResponseEntity.ok(service.GetByUserId(userId));
    }

}