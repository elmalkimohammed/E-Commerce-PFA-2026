package com.ecommerce.notificationservice.controller;

import com.ecommerce.notificationservice.dto.response.NotificationResponse;
import com.ecommerce.notificationservice.service.INotificationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

    private final INotificationService notificationService;

    public NotificationController(INotificationService notificationService) {
        this.notificationService = notificationService;
    }

    // ─── [GET] Récupérer toutes les notifications d'un utilisateur ───
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<NotificationResponse>> getUserNotifications(
            @PathVariable UUID userId) {
        List<NotificationResponse> notifications =
                notificationService.getUserNotifications(userId);
        return ResponseEntity.ok(notifications); // 200
    }
    @GetMapping("/user/notif/{notifId}")
    public ResponseEntity<NotificationResponse> getNotification(
            @PathVariable UUID notifId) {
        NotificationResponse notification = notificationService.getNotification(notifId);
        return ResponseEntity.ok(notification); // 200
    }

    // ─── [POST] Welcome Notification ───
    @PostMapping("/welcome/{userId}")
    public ResponseEntity<NotificationResponse> createWelcomeNotification(
            @PathVariable UUID userId) {
        NotificationResponse response =
                notificationService.createWelcomeNotification(userId);
        return ResponseEntity.status(HttpStatus.CREATED).body(response); // 201
    }

    // ─── [POST] Order Pending Notification ───
    @PostMapping("/order-pending/{userId}/{orderId}")
    public ResponseEntity<NotificationResponse> createOrderPendingNotification(
            @PathVariable UUID userId,
            @PathVariable String orderId) {
        NotificationResponse response =
                notificationService.createOrderPendingNotification(userId, orderId);
        return ResponseEntity.status(HttpStatus.CREATED).body(response); // 201
    }

    // ─── [POST] Order Cancelled Notification ───
    @PostMapping("/order-cancelled/{userId}/{orderId}")
    public ResponseEntity<NotificationResponse> createOrderCancelledNotification(
            @PathVariable UUID userId,
            @PathVariable String orderId) {
        NotificationResponse response =
                notificationService.createOrderCancelledNotification(userId, orderId);
        return ResponseEntity.status(HttpStatus.CREATED).body(response); // 201
    }

    // ─── [POST] Order Delivered Notification ───
    @PostMapping("/order-delivered/{userId}/{orderId}")
    public ResponseEntity<NotificationResponse> createOrderDeliveredNotification(
            @PathVariable UUID userId,
            @PathVariable String orderId) {
        NotificationResponse response =
                notificationService.createOrderDeliveredNotification(userId, orderId);
        return ResponseEntity.status(HttpStatus.CREATED).body(response); // 201
    }

    // ─── [POST] Confidential Profile Updated Notification ───
    @PostMapping("/profile-confidential-updated/{userId}")
    public ResponseEntity<NotificationResponse> createConfidentialUpdatedNotification(
            @PathVariable UUID userId) {
        NotificationResponse response =
                notificationService.createConfidentialUpdatedNotification(userId);
        return ResponseEntity.status(HttpStatus.CREATED).body(response); // 201
    }

    // ─── [POST] Public Profile Updated Notification ───
    @PostMapping("/profile-public-updated/{userId}")
    public ResponseEntity<NotificationResponse> createPublicUpdatedNotification(
            @PathVariable UUID userId) {
        NotificationResponse response =
                notificationService.createPublicUpdatedNotification(userId);
        return ResponseEntity.status(HttpStatus.CREATED).body(response); // 201
    }

    // ─── [PATCH] Marquer une notification comme lue ───
    @PatchMapping("/{notificationId}/read")
    public ResponseEntity<NotificationResponse> markAsRead(
            @PathVariable UUID notificationId) {
        NotificationResponse response = notificationService.markAsRead(notificationId);
        return ResponseEntity.ok(response); // 200
    }

    // ─── [DELETE] Supprimer une notification spécifique ───
    @DeleteMapping("/{notificationId}")
    public ResponseEntity<Void> deleteNotification(
            @PathVariable UUID notificationId) {
        notificationService.deleteNotification(notificationId);
        return ResponseEntity.noContent().build(); // 204
    }

    // ─── [DELETE] Vider toutes les notifications d'un utilisateur ───
    @DeleteMapping("/user/{userId}/clear")
    public ResponseEntity<Void> clearAllNotifications(
            @PathVariable UUID userId) {
        notificationService.clearAllNotifications(userId);
        return ResponseEntity.noContent().build(); // 204
    }
}