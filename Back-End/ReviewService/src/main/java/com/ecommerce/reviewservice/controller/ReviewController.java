package com.ecommerce.reviewservice.controller;

import com.ecommerce.reviewservice.dto.*;
import com.ecommerce.reviewservice.service.ReviewService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService service;

    @PostMapping
    public GetReviewDto create(@RequestBody @Valid CreateReviewDto dto) {
        return service.create(dto);
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
        return service.update(id, dto);
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

}