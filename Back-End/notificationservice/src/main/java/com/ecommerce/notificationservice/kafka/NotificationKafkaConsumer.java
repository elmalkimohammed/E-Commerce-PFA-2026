package com.ecommerce.notificationservice.kafka;

import com.ecommerce.notificationservice.entity.Notification;
import com.ecommerce.notificationservice.enums.NotificationType;
import com.ecommerce.notificationservice.mapper.NotificationMapper;
import com.ecommerce.notificationservice.repository.NotificationRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class NotificationKafkaConsumer {

    private final NotificationRepository notificationRepository;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public NotificationKafkaConsumer(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    // ─── Méthode utilitaire : extrait l'UUID depuis JSON ou plain text ───
    private UUID extractUserId(JsonNode json) {
        if (json.has("UserId"))   return UUID.fromString(json.get("UserId").asText());
        if (json.has("userId"))   return UUID.fromString(json.get("userId").asText());
        if (json.has("user_id"))  return UUID.fromString(json.get("user_id").asText());
        throw new IllegalArgumentException("No userId field found in message: " + json);
    }

    private String extractField(JsonNode json, String... keys) {
        for (String key : keys) {
            if (json.has(key)) return json.get(key).asText();
        }
        return null;
    }

    // ─── Parser intelligent : supporte JSON ET plain text ───
    private JsonNode parseMessage(String message) throws Exception {
        message = message.trim();
        if (message.startsWith("{")) {
            return objectMapper.readTree(message); // JSON
        }
        // Plain text "userId::extraInfo" → convertit en JSON
        String[] parts = message.split("::");
        ObjectMapper m = new ObjectMapper();
        com.fasterxml.jackson.databind.node.ObjectNode node = m.createObjectNode();
        node.put("UserId", parts[0].trim());
        if (parts.length > 1) node.put("Extra", parts[1].trim());
        return node;
    }

    // ─────────────────────────────────────────────────────────────────────
    // Topic : user-registered  |  Format AuthService : {"UserId":"..."}
    // ─────────────────────────────────────────────────────────────────────
    @KafkaListener(topics = "${kafka.topics.user-registered}", groupId = "${spring.kafka.consumer.group-id}")
    public void handleUserRegistered(String message) {
        try {
            System.out.println(">>> [KAFKA] user-registered reçu: " + message);
            JsonNode json   = parseMessage(message);
            UUID userId     = extractUserId(json);
            String username = extractField(json, "Username", "username", "Extra");
            if (username == null) username = "User";

            Notification notification = NotificationMapper.toEntityFromKafka(
                    userId,
                    "Welcome to our Platform! 🎉",
                    "Hello " + username + "! Your account has been created successfully. Welcome aboard!",
                    NotificationType.WELCOME
            );
            notificationRepository.save(notification);
            System.out.println(">>> [KAFKA] ✅ Notification WELCOME sauvegardée pour: " + userId);

        } catch (Exception e) {
            System.err.println(">>> [KAFKA] ❌ ERREUR user-registered: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // ─────────────────────────────────────────────────────────────────────
    // Topic : order-confirmed  |  Format : {"UserId":"...","OrderId":"..."}
    // ─────────────────────────────────────────────────────────────────────
    @KafkaListener(topics = "${kafka.topics.order-confirmed}", groupId = "${spring.kafka.consumer.group-id}")
    public void handleOrderConfirmed(String message) {
        try {
            System.out.println(">>> [KAFKA] order-confirmed reçu: " + message);
            JsonNode json   = parseMessage(message);
            UUID userId     = extractUserId(json);
            String orderId  = extractField(json, "OrderId", "orderId", "Extra");
            if (orderId == null) orderId = "N/A";

            Notification notification = NotificationMapper.toEntityFromKafka(
                    userId,
                    "Order Confirmed ✅",
                    "Your order #" + orderId + " has been confirmed and is now pending processing.",
                    NotificationType.ORDER_PENDING
            );
            notificationRepository.save(notification);
            System.out.println(">>> [KAFKA] ✅ Notification ORDER_PENDING sauvegardée pour: " + userId);

        } catch (Exception e) {
            System.err.println(">>> [KAFKA] ❌ ERREUR order-confirmed: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // ─────────────────────────────────────────────────────────────────────
    // Topic : order-cancelled  |  Format : {"UserId":"...","OrderId":"..."}
    // ─────────────────────────────────────────────────────────────────────
    @KafkaListener(topics = "${kafka.topics.order-cancelled}", groupId = "${spring.kafka.consumer.group-id}")
    public void handleOrderCancelled(String message) {
        try {
            System.out.println(">>> [KAFKA] order-cancelled reçu: " + message);
            JsonNode json   = parseMessage(message);
            UUID userId     = extractUserId(json);
            String orderId  = extractField(json, "OrderId", "orderId", "Extra");
            if (orderId == null) orderId = "N/A";

            Notification notification = NotificationMapper.toEntityFromKafka(
                    userId,
                    "Order Cancelled ❌",
                    "Your order #" + orderId + " has been successfully cancelled.",
                    NotificationType.ORDER_CANCELLED
            );
            notificationRepository.save(notification);
            System.out.println(">>> [KAFKA] ✅ Notification ORDER_CANCELLED sauvegardée pour: " + userId);

        } catch (Exception e) {
            System.err.println(">>> [KAFKA] ❌ ERREUR order-cancelled: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // ─────────────────────────────────────────────────────────────────────
    // Topic : order-delivered  |  Format : {"UserId":"...","OrderId":"..."}
    // ─────────────────────────────────────────────────────────────────────
    @KafkaListener(topics = "${kafka.topics.order-delivered}", groupId = "${spring.kafka.consumer.group-id}")
    public void handleOrderDelivered(String message) {
        try {
            System.out.println(">>> [KAFKA] order-delivered reçu: " + message);
            JsonNode json   = parseMessage(message);
            UUID userId     = extractUserId(json);
            String orderId  = extractField(json, "OrderId", "orderId", "Extra");
            if (orderId == null) orderId = "N/A";

            Notification notification = NotificationMapper.toEntityFromKafka(
                    userId,
                    "Order Delivered 📦",
                    "Your order #" + orderId + " has been delivered successfully. Thank you for your purchase!",
                    NotificationType.ORDER_DELIVERED
            );
            notificationRepository.save(notification);
            System.out.println(">>> [KAFKA] ✅ Notification ORDER_DELIVERED sauvegardée pour: " + userId);

        } catch (Exception e) {
            System.err.println(">>> [KAFKA] ❌ ERREUR order-delivered: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // ─────────────────────────────────────────────────────────────────────
    // Topic : profile-confidential-updated  |  Format : {"UserId":"..."}
    // ─────────────────────────────────────────────────────────────────────
    @KafkaListener(topics = "${kafka.topics.profile-confidential-updated}", groupId = "${spring.kafka.consumer.group-id}")
    public void handleConfidentialProfileUpdated(String message) {
        try {
            System.out.println(">>> [KAFKA] profile-confidential-updated reçu: " + message);
            JsonNode json = parseMessage(message);
            UUID userId   = extractUserId(json);

            Notification notification = NotificationMapper.toEntityFromKafka(
                    userId,
                    "Security Alert 🔐",
                    "Your confidential account information (email/password) has been updated successfully.",
                    NotificationType.PROFILE_CONFIDENTIAL_UPDATED
            );
            notificationRepository.save(notification);
            System.out.println(">>> [KAFKA] ✅ Notification CONFIDENTIAL_UPDATED sauvegardée pour: " + userId);

        } catch (Exception e) {
            System.err.println(">>> [KAFKA] ❌ ERREUR profile-confidential-updated: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // ─────────────────────────────────────────────────────────────────────
    // Topic : profile-public-updated  |  Format : {"UserId":"..."}
    // ─────────────────────────────────────────────────────────────────────
    @KafkaListener(topics = "${kafka.topics.profile-public-updated}", groupId = "${spring.kafka.consumer.group-id}")
    public void handlePublicProfileUpdated(String message) {
        try {
            System.out.println(">>> [KAFKA] profile-public-updated reçu: " + message);
            JsonNode json = parseMessage(message);
            UUID userId   = extractUserId(json);

            Notification notification = NotificationMapper.toEntityFromKafka(
                    userId,
                    "Profile Updated ✏️",
                    "Your public profile information has been updated successfully.",
                    NotificationType.PROFILE_PUBLIC_UPDATED
            );
            notificationRepository.save(notification);
            System.out.println(">>> [KAFKA] ✅ Notification PUBLIC_UPDATED sauvegardée pour: " + userId);

        } catch (Exception e) {
            System.err.println(">>> [KAFKA] ❌ ERREUR profile-public-updated: " + e.getMessage());
            e.printStackTrace();
        }
    }
}