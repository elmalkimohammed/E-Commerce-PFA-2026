package com.ecommerce.notificationservice.service;

import com.ecommerce.notificationservice.dto.request.CreateNotificationRequest;
import com.ecommerce.notificationservice.dto.response.NotificationResponse;

import java.util.List;
import java.util.UUID;

public interface INotificationService {

    // [GET] Get all visible notifications for a user
    List<NotificationResponse> getUserNotifications(UUID userId);

    // [POST] Create any type of notification
    NotificationResponse createNotification(CreateNotificationRequest request);

    // [DELETE] Delete a specific notification by ID
    void deleteNotification(UUID notificationId);

    // [DELETE] Soft-delete: clear all notifications (ReadableByUser → false)
    void clearAllNotifications(UUID userId);
}