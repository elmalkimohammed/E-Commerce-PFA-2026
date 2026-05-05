package com.ecommerce.notificationservice.entity;

import com.ecommerce.notificationservice.enums.NotificationStatus;
import com.ecommerce.notificationservice.enums.NotificationType;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "Notifications")
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "NotificationId", updatable = false, nullable = false)
    private UUID notificationId;

    @Column(name = "UserId", nullable = false)
    private UUID userId;

    @Column(name = "Title", nullable = false)
    private String title;

    @Column(name = "Message", nullable = false, columnDefinition = "TEXT")
    private String message;

    @Enumerated(EnumType.STRING)
    @Column(name = "Status", nullable = false)
    private NotificationStatus status;

    @Enumerated(EnumType.STRING)
    @Column(name = "Type", nullable = false)
    private NotificationType type;

    @Column(name = "ReadableByUser", nullable = false)
    private Boolean readableByUser;

    @Column(name = "CreatedAt", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    // ───── Constructors ─────
    public Notification() {}

    public Notification(UUID notificationId, UUID userId, String title, String message,
                        NotificationStatus status, NotificationType type,
                        Boolean readableByUser, LocalDateTime createdAt) {
        this.notificationId = notificationId;
        this.userId = userId;
        this.title = title;
        this.message = message;
        this.status = status;
        this.type = type;
        this.readableByUser = readableByUser;
        this.createdAt = createdAt;
    }

    // ───── Getters & Setters ─────
    public UUID getNotificationId() { return notificationId; }
    public void setNotificationId(UUID notificationId) { this.notificationId = notificationId; }

    public UUID getUserId() { return userId; }
    public void setUserId(UUID userId) { this.userId = userId; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public NotificationStatus getStatus() { return status; }
    public void setStatus(NotificationStatus status) { this.status = status; }

    public NotificationType getType() { return type; }
    public void setType(NotificationType type) { this.type = type; }

    public Boolean getReadableByUser() { return readableByUser; }
    public void setReadableByUser(Boolean readableByUser) { this.readableByUser = readableByUser; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}