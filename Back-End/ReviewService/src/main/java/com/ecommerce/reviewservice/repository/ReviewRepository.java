package com.ecommerce.reviewservice.repository;

import com.ecommerce.reviewservice.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ReviewRepository extends JpaRepository<Review, UUID> {

    List<Review> findByProductId(int productId);
    List<Review> findByUserId(UUID userId);
}