CREATE DATABASE IF NOT EXISTS notificationdb;
USE notificationdb;

CREATE TABLE IF NOT EXISTS Notifications (
    NotificationId CHAR(36) NOT NULL PRIMARY KEY,
    UserId         CHAR(36) NOT NULL,
    Title          VARCHAR(255) NOT NULL,
    Message        TEXT NOT NULL,
    Status         ENUM('SENT', 'READ') NOT NULL DEFAULT 'SENT',
    Type           ENUM('WELCOME','ORDER_PENDING','ORDER_CANCELLED',
                        'ORDER_DELIVERED','PROFILE_CONFIDENTIAL_UPDATED',
                        'PROFILE_PUBLIC_UPDATED') NOT NULL,
    ReadableByUser BOOLEAN NOT NULL DEFAULT TRUE,
    CreatedAt      DATETIME NOT NULL,
    INDEX idx_userId (UserId),
    INDEX idx_readable (ReadableByUser)
);