package com.projet.initial.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import jakarta.persistence.*;

import java.time.LocalDateTime;

import java.util.UUID;
@Entity
@Table(name="Repport")
public class Repport {

    @Id
    @GeneratedValue
    private UUID RepportId;

    private UUID UserID;
    private String SourceEmail;
    private String Title;
    private String Description;


    private LocalDateTime CreatedAt;

    public UUID getRepportId() {
        return RepportId;
    }

    public UUID getUserID() {
        return UserID;
    }

    public String getSourceEmail() {
        return SourceEmail;
    }

    public void setSourceEmail(String sourceEmail) {
        SourceEmail = sourceEmail;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
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
