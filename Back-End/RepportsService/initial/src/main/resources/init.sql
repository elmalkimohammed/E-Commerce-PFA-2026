CREATE TABLE IF NOT EXISTS Repport (
    RepportId    UUID PRIMARY KEY,
    UserID       UUID,
    SourceEmail  VARCHAR(255),
    Title        VARCHAR(255),
    Description  TEXT,
    CreatedAt    TIMESTAMP
    );