package com.projet.initial.Dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class PostDtoRequest {

    @JsonProperty("UserID")
    private UUID UserID;

    @JsonProperty("SourceEmail")
    private String SourceEmail;

    @JsonProperty("Title")
    private String Title;

    @JsonProperty("Description")
    private String Description;



    public UUID getUserID() {
        return UserID;
    }

    public void setUserID(UUID userID) {
        UserID = userID;
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
}
