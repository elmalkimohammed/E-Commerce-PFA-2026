package com.ecommerce.reviewservice.controller;

import com.ecommerce.reviewservice.dto.*;
import com.ecommerce.reviewservice.entity.Review;
import com.ecommerce.reviewservice.service.ReviewService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService service;

    // POST
    @PostMapping
    public Review create(@RequestBody @Valid CreateReviewDto dto) {
        return service.create(dto);
    }

    // GET comments
    @GetMapping("/product/{productId}")
    public List<Review> getByProduct(@PathVariable UUID productId) {
        return service.getByProduct(productId);
    }

    // GET rating
    @GetMapping("/product/{productId}/rating")
    public double getRating(@PathVariable UUID productId) {
        return service.getRating(productId);
    }

    // PUT
    @PutMapping("/{id}")
    public Review update(@PathVariable UUID id,
                         @RequestBody UpdateReviewDto dto) {
        return service.update(id, dto);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        service.delete(id);
    }
}