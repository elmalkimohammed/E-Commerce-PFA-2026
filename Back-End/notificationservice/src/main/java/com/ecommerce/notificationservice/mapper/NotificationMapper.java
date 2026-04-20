package com.ecommerce.notificationservice.mapper;

import com.ecommerce.notificationservice.dto.request.CreateNotificationRequest;
import com.ecommerce.notificationservice.dto.response.NotificationResponse;
import com.ecommerce.notificationservice.entity.Notification;
import com.ecommerce.notificationservice.enums.NotificationStatus;
import com.ecommerce.notificationservice.enums.NotificationType;

import java.time.LocalDateTime;
import java.util.UUID;

/**
 * NotificationMapper — Static utility class.
 * Responsible for mapping between DTOs and Entities.
 * Follows Single Responsibility Principle (SOLID).
 */
public class NotificationMapper {

    // Private constructor — prevents instantiation
    private NotificationMapper() {}

    /**
     * Maps a CreateNotificationRequest DTO → Notification Entity
     * Used when creating a new notification from an API call.
     */
    public static Notification toEntity(CreateNotificationRequest request) {
        Notification notification = new Notification();
        notification.setUserId(request.getUserId());
        notification.setTitle(request.getTitle());
        notification.setMessage(request.getMessage());
        notification.setType(request.getType());
        notification.setStatus(NotificationStatus.SENT);     // Default status on creation
        notification.setReadableByUser(true);                 // Visible to user by default
        notification.setCreatedAt(LocalDateTime.now());
        return notification;
    }

    /**
     * Builds a Notification Entity directly from raw fields.
     * Used by Kafka consumers when receiving events from other microservices.
     */
    public static Notification toEntityFromKafka(UUID userId, String title,
                                                 String message, NotificationType type) {
        Notification notification = new Notification();
        notification.setUserId(userId);
        notification.setTitle(title);
        notification.setMessage(message);
        notification.setType(type);
        notification.setStatus(NotificationStatus.SENT);
        notification.setReadableByUser(true);
        notification.setCreatedAt(LocalDateTime.now());
        return notification;
    }

    /**
     * Maps a Notification Entity → NotificationResponse DTO
     * Used when returning data to the client (API response).
     */
    public static NotificationResponse toResponse(Notification notification) {
        return new NotificationResponse(
                notification.getNotificationId(),
                notification.getUserId(),
                notification.getTitle(),
                notification.getMessage(),
                notification.getStatus(),
                notification.getType(),
                notification.getReadableByUser(),
                notification.getCreatedAt()
        );
    }
}