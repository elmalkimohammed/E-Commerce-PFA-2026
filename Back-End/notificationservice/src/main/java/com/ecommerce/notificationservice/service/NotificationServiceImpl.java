package com.ecommerce.notificationservice.service;

import com.ecommerce.notificationservice.dto.response.NotificationResponse;
import com.ecommerce.notificationservice.entity.Notification;
import com.ecommerce.notificationservice.enums.NotificationStatus;
import com.ecommerce.notificationservice.enums.NotificationType;
import com.ecommerce.notificationservice.exception.NotificationNotFoundException;
import com.ecommerce.notificationservice.mapper.NotificationMapper;
import com.ecommerce.notificationservice.repository.NotificationRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class NotificationServiceImpl implements INotificationService {

    private final NotificationRepository notificationRepository;

    public NotificationServiceImpl(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    // ─── [GET] Récupérer toutes les notifications visibles ───
    @Override
    public List<NotificationResponse> getUserNotifications(UUID userId) {
        return notificationRepository
                .findByUserIdAndReadableByUserTrue(userId)
                .stream()
                .map(NotificationMapper::toResponse)
                .collect(Collectors.toList());
    }

    // ─── [POST] Welcome Notification ───
    @Override
    public NotificationResponse createWelcomeNotification(UUID userId) {
        Notification notification = NotificationMapper.toEntityFromKafka(
                userId,
                "Welcome to our Platform! 🎉",
                "Your account has been created successfully. Welcome aboard!",
                NotificationType.WELCOME
        );
        return NotificationMapper.toResponse(notificationRepository.save(notification));
    }

    // ─── [POST] Order Pending Notification ───
    @Override
    public NotificationResponse createOrderPendingNotification(UUID userId, String orderId) {
        Notification notification = NotificationMapper.toEntityFromKafka(
                userId,
                "Order Confirmed ✅",
                "Your order #" + orderId + " has been confirmed and is now pending processing.",
                NotificationType.ORDER_PENDING
        );
        return NotificationMapper.toResponse(notificationRepository.save(notification));
    }

    // ─── [POST] Order Cancelled Notification ───
    @Override
    public NotificationResponse createOrderCancelledNotification(UUID userId, String orderId) {
        Notification notification = NotificationMapper.toEntityFromKafka(
                userId,
                "Order Cancelled ❌",
                "Your order #" + orderId + " has been successfully cancelled.",
                NotificationType.ORDER_CANCELLED
        );
        return NotificationMapper.toResponse(notificationRepository.save(notification));
    }

    // ─── [POST] Order Delivered Notification ───
    @Override
    public NotificationResponse createOrderDeliveredNotification(UUID userId, String orderId) {
        Notification notification = NotificationMapper.toEntityFromKafka(
                userId,
                "Order Delivered 📦",
                "Your order #" + orderId + " has been delivered successfully. Thank you!",
                NotificationType.ORDER_DELIVERED
        );
        return NotificationMapper.toResponse(notificationRepository.save(notification));
    }

    // ─── [POST] Confidential Profile Updated Notification ───
    @Override
    public NotificationResponse createConfidentialUpdatedNotification(UUID userId) {
        Notification notification = NotificationMapper.toEntityFromKafka(
                userId,
                "Security Alert 🔐",
                "Your confidential account information has been updated successfully.",
                NotificationType.PROFILE_CONFIDENTIAL_UPDATED
        );
        return NotificationMapper.toResponse(notificationRepository.save(notification));
    }

    // ─── [POST] Public Profile Updated Notification ───
    @Override
    public NotificationResponse createPublicUpdatedNotification(UUID userId) {
        Notification notification = NotificationMapper.toEntityFromKafka(
                userId,
                "Profile Updated ✏️",
                "Your public profile information has been updated successfully.",
                NotificationType.PROFILE_PUBLIC_UPDATED
        );
        return NotificationMapper.toResponse(notificationRepository.save(notification));
    }

    // ─── [PATCH] Marquer une notification comme lue ───
    @Override
    public NotificationResponse markAsRead(UUID notificationId) {
        Notification notification = notificationRepository.findById(notificationId)
                .orElseThrow(() -> new NotificationNotFoundException(
                        "Notification not found with ID: " + notificationId));

        // Changer le status SENT → READ
        notification.setStatus(NotificationStatus.READ);
        return NotificationMapper.toResponse(notificationRepository.save(notification));
    }

    // ─── [DELETE] Supprimer une notification spécifique ───
    @Override
    public void deleteNotification(UUID notificationId) {
        Notification notification = notificationRepository.findById(notificationId)
                .orElseThrow(() -> new NotificationNotFoundException(
                        "Notification not found with ID: " + notificationId));
        notificationRepository.delete(notification);
    }

    // ─── [DELETE] Vider toutes les notifications (Soft Delete) ───
    @Override
    @Transactional
    public void clearAllNotifications(UUID userId) {
        notificationRepository.clearAllNotificationsByUserId(userId);
    }
}