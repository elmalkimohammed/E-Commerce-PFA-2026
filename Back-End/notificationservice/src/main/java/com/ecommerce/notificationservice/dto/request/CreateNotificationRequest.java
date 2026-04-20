package com.ecommerce.notificationservice.dto.request;

import com.ecommerce.notificationservice.enums.NotificationType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.util.UUID;

public class CreateNotificationRequest {

    @NotNull(message = "UserId is required")
    private UUID userId;

    @NotBlank(message = "Title is required")
    private String title;

    @NotBlank(message = "Message is required")
    private String message;

    @NotNull(message = "Type is required")
    private NotificationType type;

    // ───── Constructors ─────
    public CreateNotificationRequest() {}

    public CreateNotificationRequest(UUID userId, String title,
                                     String message, NotificationType type) {
        this.userId = userId;
        this.title = title;
        this.message = message;
        this.type = type;
    }

    // ───── Getters & Setters ─────
    public UUID getUserId() { return userId; }
    public void setUserId(UUID userId) { this.userId = userId; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public NotificationType getType() { return type; }
    public void setType(NotificationType type) { this.type = type; }
}