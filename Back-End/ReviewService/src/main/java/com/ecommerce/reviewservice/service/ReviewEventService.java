package com.ecommerce.reviewservice.service;

import com.ecommerce.reviewservice.entity.Review;
import com.ecommerce.reviewservice.event.ReviewEvent;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Slf4j
@Service
@RequiredArgsConstructor
public class ReviewEventService {

    private final KafkaTemplate<String, Object> kafkaTemplate;
    private static final String TOPIC = "review-events";

    public void publishReviewCreatedEvent(Review review, String performedBy) {
        ReviewEvent event = ReviewEvent.builder()
                .reviewId(review.getReviewId())
                .productId(review.getProductId())
                .userId(review.getUserId())
                .rating(review.getRating())
                .comment(review.getComment())
                .action("CREATED")
                .timestamp(LocalDateTime.now())
                .performedBy(performedBy)
                .build();

        kafkaTemplate.send(TOPIC, event);
        log.info("Published review created event for reviewId: {}", review.getReviewId());
    }

    public void publishReviewUpdatedEvent(Review review, String performedBy) {
        ReviewEvent event = ReviewEvent.builder()
                .reviewId(review.getReviewId())
                .productId(review.getProductId())
                .userId(review.getUserId())
                .rating(review.getRating())
                .comment(review.getComment())
                .action("UPDATED")
                .timestamp(LocalDateTime.now())
                .performedBy(performedBy)
                .build();

        kafkaTemplate.send(TOPIC, event);
        log.info("Published review updated event for reviewId: {}", review.getReviewId());
    }

    public void publishReviewDeletedEvent(Review review, String performedBy) {
        ReviewEvent event = ReviewEvent.builder()
                .reviewId(review.getReviewId())
                .productId(review.getProductId())
                .userId(review.getUserId())
                .rating(0)
                .comment("")
                .action("DELETED")
                .timestamp(LocalDateTime.now())
                .performedBy(performedBy)
                .build();

        kafkaTemplate.send(TOPIC, event);
        log.info("Published review deleted event for reviewId: {}", review.getReviewId());
    }
}