package com.ecommerce.notificationservice.repository;

import com.ecommerce.notificationservice.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, UUID> {

    // Get all visible notifications for a user
    List<Notification> findByUserIdAndReadableByUserTrue(UUID userId);

    // Soft-delete: set ReadableByUser = false for all user notifications
    @Modifying
    @Query("UPDATE Notification n SET n.readableByUser = false WHERE n.userId = :userId")
    void clearAllNotificationsByUserId(@Param("userId") UUID userId);
}