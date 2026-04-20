package com.ecommerce.notificationservice.controller;

import com.ecommerce.notificationservice.dto.request.CreateNotificationRequest;
import com.ecommerce.notificationservice.dto.response.NotificationResponse;
import com.ecommerce.notificationservice.service.INotificationService;
import jakarta.validation.Valid;
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

    // ─── [GET] Get All Notifications For A User ───
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<NotificationResponse>> getUserNotifications(
            @PathVariable UUID userId) {
        List<NotificationResponse> notifications = notificationService.getUserNotifications(userId);
        return ResponseEntity.ok(notifications); // 200
    }

    // ─── [POST] Order Confirmed (Pending) ───
    @PostMapping("/order-pending")
    public ResponseEntity<NotificationResponse> createOrderPendingNotification(
            @Valid @RequestBody CreateNotificationRequest request) {
        NotificationResponse response = notificationService.createNotification(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response); // 201
    }

    // ─── [POST] Order Cancelled ───
    @PostMapping("/order-cancelled")
    public ResponseEntity<NotificationResponse> createOrderCancelledNotification(
            @Valid @RequestBody CreateNotificationRequest request) {
        NotificationResponse response = notificationService.createNotification(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response); // 201
    }

    // ─── [POST] Order Delivered (Paid Successfully) ───
    @PostMapping("/order-delivered")
    public ResponseEntity<NotificationResponse> createOrderDeliveredNotification(
            @Valid @RequestBody CreateNotificationRequest request) {
        NotificationResponse response = notificationService.createNotification(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response); // 201
    }

    // ─── [POST] Welcome Notification (New User) ───
    @PostMapping("/welcome")
    public ResponseEntity<NotificationResponse> createWelcomeNotification(
            @Valid @RequestBody CreateNotificationRequest request) {
        NotificationResponse response = notificationService.createNotification(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response); // 201
    }

    // ─── [POST] Confidential Profile Info Updated ───
    @PostMapping("/profile-confidential-updated")
    public ResponseEntity<NotificationResponse> createConfidentialUpdateNotification(
            @Valid @RequestBody CreateNotificationRequest request) {
        NotificationResponse response = notificationService.createNotification(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response); // 201
    }

    // ─── [POST] Public Profile Info Updated ───
    @PostMapping("/profile-public-updated")
    public ResponseEntity<NotificationResponse> createPublicUpdateNotification(
            @Valid @RequestBody CreateNotificationRequest request) {
        NotificationResponse response = notificationService.createNotification(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response); // 201
    }

    // ─── [DELETE] Delete A Specific Notification ───
    @DeleteMapping("/{notificationId}")
    public ResponseEntity<Void> deleteNotification(@PathVariable UUID notificationId) {
        notificationService.deleteNotification(notificationId);
        return ResponseEntity.noContent().build(); // 204
    }

    // ─── [DELETE] Clear All Notifications For A User ───
    @DeleteMapping("/user/{userId}/clear")
    public ResponseEntity<Void> clearAllNotifications(@PathVariable UUID userId) {
        notificationService.clearAllNotifications(userId);
        return ResponseEntity.noContent().build(); // 204
    }
}