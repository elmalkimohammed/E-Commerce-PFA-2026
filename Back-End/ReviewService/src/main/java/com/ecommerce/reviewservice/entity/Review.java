package com.ecommerce.reviewservice.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "review_db")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)  // ← UUID, pas IDENTITY
    @Column(columnDefinition = "uuid", updatable = false, nullable = false)
    private UUID reviewId;
    
    @Column(nullable = false)
    private int productId;  // int pour INTEGER

    @Column(nullable = false)
    private UUID userId;  // int pour INTEGER (pas UUID!)

    @Column(nullable = false)
    private int rating;

    @Column(columnDefinition = "TEXT")
    private String comment;

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;
}