package com.ecommerce.notificationservice.service;

import com.ecommerce.notificationservice.dto.request.CreateNotificationRequest;
import com.ecommerce.notificationservice.dto.response.NotificationResponse;
import com.ecommerce.notificationservice.entity.Notification;
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

    // Constructor Injection (Best Practice — SOLID DIP)
    public NotificationServiceImpl(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    // ─── [GET] Get All Visible Notifications For A User ───
    @Override
    public List<NotificationResponse> getUserNotifications(UUID userId) {
        return notificationRepository
                .findByUserIdAndReadableByUserTrue(userId)
                .stream()
                .map(NotificationMapper::toResponse)
                .collect(Collectors.toList());
    }

    // ─── [POST] Create A Notification ───
    @Override
    public NotificationResponse createNotification(CreateNotificationRequest request) {
        Notification notification = NotificationMapper.toEntity(request);
        Notification saved = notificationRepository.save(notification);
        return NotificationMapper.toResponse(saved);
    }

    // ─── [DELETE] Delete A Specific Notification ───
    @Override
    public void deleteNotification(UUID notificationId) {
        Notification notification = notificationRepository.findById(notificationId)
                .orElseThrow(() -> new NotificationNotFoundException(
                        "Notification not found with ID: " + notificationId));
        notificationRepository.delete(notification);
    }

    // ─── [DELETE] Clear All Notifications (Soft Delete) ───
    @Override
    @Transactional
    public void clearAllNotifications(UUID userId) {
        notificationRepository.clearAllNotificationsByUserId(userId);
    }
}