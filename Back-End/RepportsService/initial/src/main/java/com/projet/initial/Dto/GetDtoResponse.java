package com.projet.initial.Dto;

import java.time.LocalDateTime;

import java.util.UUID;

public class GetDtoResponse {
    private UUID RepportId;
    private UUID UserID ;
    private String SourceEmail;
    private String Title;
    private String Description;
    private LocalDateTime CreatedAt;

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }

    public String getSourceEmail() {
        return SourceEmail;
    }

    public void setSourceEmail(String sourceEmail) {
        SourceEmail = sourceEmail;
    }

    public UUID getUserID() {
        return UserID;
    }

    public UUID getRepportId() {
        return RepportId;
    }

    public void setRepportId(UUID repportId) {
        RepportId = repportId;
    }

    public void setUserID(UUID userID) {
        UserID = userID;
    }

    public LocalDateTime getCreatedAt() {
        return CreatedAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        CreatedAt = createdAt;
    }
}
