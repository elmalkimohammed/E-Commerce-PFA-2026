package com.ecommerce.notificationservice.mapper;

import com.ecommerce.notificationservice.dto.response.NotificationResponse;
import com.ecommerce.notificationservice.entity.Notification;
import com.ecommerce.notificationservice.enums.NotificationStatus;
import com.ecommerce.notificationservice.enums.NotificationType;

import java.time.LocalDateTime;
import java.util.UUID;

/**
 * NotificationMapper — Classe statique utilitaire.
 * Responsable uniquement du mapping entre Entity et Response DTO.
 * Principe SRP (Single Responsibility Principle).
 */
public class NotificationMapper {

    // Empêche l'instanciation de cette classe
    private NotificationMapper() {}

    // ─────────────────────────────────────────────────────────────
    // Entity Builder — Utilisé par le Service et le Kafka Consumer
    // ─────────────────────────────────────────────────────────────

    /**
     * Construit une Notification Entity depuis les données brutes.
     * Appelé par :
     *  - NotificationServiceImpl (via les endpoints REST)
     *  - NotificationKafkaConsumer (via les events Kafka)
     *
     * @param userId  L'identifiant de l'utilisateur concerné
     * @param title   Le titre de la notification
     * @param message Le message de la notification
     * @param type    Le type de la notification (WELCOME, ORDER_PENDING, ...)
     * @return        Une nouvelle Notification Entity prête à être sauvegardée
     */
    public static Notification toEntityFromKafka(UUID userId,
                                                  String title,
                                                  String message,
                                                  NotificationType type) {
        Notification notification = new Notification();
        notification.setUserId(userId);
        notification.setTitle(title);
        notification.setMessage(message);
        notification.setType(type);
        notification.setStatus(NotificationStatus.SENT);   // Toujours SENT à la création
        notification.setReadableByUser(true);               // Visible par l'utilisateur
        notification.setCreatedAt(LocalDateTime.now());     // Date de création automatique
        return notification;
    }

    // ─────────────────────────────────────────────────────────────
    // Response Builder — Utilisé pour retourner les données au client
    // ─────────────────────────────────────────────────────────────

    /**
     * Mappe une Notification Entity → NotificationResponse DTO.
     * Appelé par :
     *  - NotificationServiceImpl (dans tous les endpoints)
     *
     * @param notification  L'entité récupérée depuis la base de données
     * @return              Un NotificationResponse DTO prêt à être retourné au client
     */
    public static NotificationResponse toResponse(Notification notification) {
        return new NotificationResponse(
                notification.getNotificationId(),
                notification.getUserId(),
                notification.getTitle(),
                notification.getMessage(),
                notification.getStatus(),
                notification.getType(),
                notification.getReadableByUser(),
                notification.getCreatedAt()
        );
    }
}