package com.ecommerce.notificationservice.kafka;

import com.ecommerce.notificationservice.entity.Notification;
import com.ecommerce.notificationservice.enums.NotificationType;
import com.ecommerce.notificationservice.mapper.NotificationMapper;
import com.ecommerce.notificationservice.repository.NotificationRepository;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import java.util.UUID;

/**
 * NotificationKafkaConsumer — Consommateur Kafka.
 * Écoute les événements des autres microservices et crée
 * automatiquement les notifications correspondantes.
 *
 * Format des messages Kafka attendu : "userId::extraInfo"
 * Exemple : "550e8400-e29b-41d4-a716-446655440000::ORD-001"
 */
@Component
public class NotificationKafkaConsumer {

    private final NotificationRepository notificationRepository;

    // ─── Injection par constructeur (SOLID - DIP) ───
    public NotificationKafkaConsumer(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    // ─────────────────────────────────────────────────────────────────────
    // Topic : user-registered
    // Émetteur : AuthService (lors de la création d'un nouveau compte)
    // Format message : "userId::username"
    // ─────────────────────────────────────────────────────────────────────
    @KafkaListener(
            topics = "${kafka.topics.user-registered}",
            groupId = "${spring.kafka.consumer.group-id}"
    )
    public void handleUserRegistered(String message) {

        // Extraction des données depuis le message Kafka
        String[] parts  = message.split("::");
        UUID userId     = UUID.fromString(parts[0]);
        String username = parts.length > 1 ? parts[1] : "User";

        // Construction et sauvegarde de la notification
        Notification notification = NotificationMapper.toEntityFromKafka(
                userId,
                "Welcome to our Platform! 🎉",
                "Hello " + username + "! Your account has been created successfully. Welcome aboard!",
                NotificationType.WELCOME
        );
        notificationRepository.save(notification);
    }

    // ─────────────────────────────────────────────────────────────────────
    // Topic : order-confirmed
    // Émetteur : OrderService (lors de la confirmation d'une commande)
    // Format message : "userId::orderId"
    // ─────────────────────────────────────────────────────────────────────
    @KafkaListener(
            topics = "${kafka.topics.order-confirmed}",
            groupId = "${spring.kafka.consumer.group-id}"
    )
    public void handleOrderConfirmed(String message) {

        // Extraction des données depuis le message Kafka
        String[] parts = message.split("::");
        UUID userId    = UUID.fromString(parts[0]);
        String orderId = parts.length > 1 ? parts[1] : "N/A";

        // Construction et sauvegarde de la notification
        Notification notification = NotificationMapper.toEntityFromKafka(
                userId,
                "Order Confirmed ✅",
                "Your order #" + orderId + " has been confirmed and is now pending processing.",
                NotificationType.ORDER_PENDING
        );
        notificationRepository.save(notification);
    }

    // ─────────────────────────────────────────────────────────────────────
    // Topic : order-cancelled
    // Émetteur : OrderService (lors de l'annulation d'une commande)
    // Format message : "userId::orderId"
    // ─────────────────────────────────────────────────────────────────────
    @KafkaListener(
            topics = "${kafka.topics.order-cancelled}",
            groupId = "${spring.kafka.consumer.group-id}"
    )
    public void handleOrderCancelled(String message) {

        // Extraction des données depuis le message Kafka
        String[] parts = message.split("::");
        UUID userId    = UUID.fromString(parts[0]);
        String orderId = parts.length > 1 ? parts[1] : "N/A";

        // Construction et sauvegarde de la notification
        Notification notification = NotificationMapper.toEntityFromKafka(
                userId,
                "Order Cancelled ❌",
                "Your order #" + orderId + " has been successfully cancelled.",
                NotificationType.ORDER_CANCELLED
        );
        notificationRepository.save(notification);
    }

    // ─────────────────────────────────────────────────────────────────────
    // Topic : order-delivered
    // Émetteur : OrderService (lors de la livraison d'une commande payée)
    // Format message : "userId::orderId"
    // ─────────────────────────────────────────────────────────────────────
    @KafkaListener(
            topics = "${kafka.topics.order-delivered}",
            groupId = "${spring.kafka.consumer.group-id}"
    )
    public void handleOrderDelivered(String message) {

        // Extraction des données depuis le message Kafka
        String[] parts = message.split("::");
        UUID userId    = UUID.fromString(parts[0]);
        String orderId = parts.length > 1 ? parts[1] : "N/A";

        // Construction et sauvegarde de la notification
        Notification notification = NotificationMapper.toEntityFromKafka(
                userId,
                "Order Delivered 📦",
                "Your order #" + orderId + " has been delivered successfully. Thank you for your purchase!",
                NotificationType.ORDER_DELIVERED
        );
        notificationRepository.save(notification);
    }

    // ─────────────────────────────────────────────────────────────────────
    // Topic : profile-confidential-updated
    // Émetteur : UserProfileService (lors de la modification email/password)
    // Format message : "userId"
    // ─────────────────────────────────────────────────────────────────────
    @KafkaListener(
            topics = "${kafka.topics.profile-confidential-updated}",
            groupId = "${spring.kafka.consumer.group-id}"
    )
    public void handleConfidentialProfileUpdated(String message) {

        // Extraction des données depuis le message Kafka
        UUID userId = UUID.fromString(message.split("::")[0]);

        // Construction et sauvegarde de la notification
        Notification notification = NotificationMapper.toEntityFromKafka(
                userId,
                "Security Alert 🔐",
                "Your confidential account information (email/password) has been updated successfully.",
                NotificationType.PROFILE_CONFIDENTIAL_UPDATED
        );
        notificationRepository.save(notification);
    }

    // ─────────────────────────────────────────────────────────────────────
    // Topic : profile-public-updated
    // Émetteur : UserProfileService (lors de la modification du profil public)
    // Format message : "userId"
    // ─────────────────────────────────────────────────────────────────────
    @KafkaListener(
            topics = "${kafka.topics.profile-public-updated}",
            groupId = "${spring.kafka.consumer.group-id}"
    )
    public void handlePublicProfileUpdated(String message) {

        // Extraction des données depuis le message Kafka
        UUID userId = UUID.fromString(message.split("::")[0]);

        // Construction et sauvegarde de la notification
        Notification notification = NotificationMapper.toEntityFromKafka(
                userId,
                "Profile Updated ✏️",
                "Your public profile information has been updated successfully.",
                NotificationType.PROFILE_PUBLIC_UPDATED
        );
        notificationRepository.save(notification);
    }
}