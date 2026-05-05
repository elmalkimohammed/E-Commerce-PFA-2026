package com.ecommerce.notificationservice.service;

import com.ecommerce.notificationservice.dto.response.NotificationResponse;

import java.util.List;
import java.util.UUID;

public interface INotificationService {

    // [GET] Récupérer toutes les notifications visibles d'un utilisateur
    List<NotificationResponse> getUserNotifications(UUID userId);
        // [GET] Récupérer une notification spécifique
    NotificationResponse getNotification(UUID notifId);

    // [POST] Créer une notification Welcome (nouveau compte)
    NotificationResponse createWelcomeNotification(UUID userId);

    // [POST] Créer une notification Order Pending (commande confirmée)
    NotificationResponse createOrderPendingNotification(UUID userId, String orderId);

    // [POST] Créer une notification Order Cancelled (commande annulée)
    NotificationResponse createOrderCancelledNotification(UUID userId, String orderId);

    // [POST] Créer une notification Order Delivered (commande livrée)
    NotificationResponse createOrderDeliveredNotification(UUID userId, String orderId);

    // [POST] Créer une notification Confidential Profile Updated
    NotificationResponse createConfidentialUpdatedNotification(UUID userId);

    // [POST] Créer une notification Public Profile Updated
    NotificationResponse createPublicUpdatedNotification(UUID userId);

    // [PATCH] Marquer une notification comme lue (SENT → READ)
    NotificationResponse markAsRead(UUID notificationId);

    // [DELETE] Supprimer une notification spécifique
    void deleteNotification(UUID notificationId);

    // [DELETE] Vider toutes les notifications (ReadableByUser → false)
    void clearAllNotifications(UUID userId);
}