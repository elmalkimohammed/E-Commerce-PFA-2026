/* ═══════════════════════════════════════════════════════════════════════════
   API Endpoints — Centralisés via Nginx Reverse Proxy (port 80)
   Tous les appels passent par http://localhost qui route vers le bon service
   ═══════════════════════════════════════════════════════════════════════════ */

/* Endpoint Of The Authentication Micro-Service API */
const authAPI = "http://localhost/api/auth"

/* Endpoint Of The Product Micro-Service API */
const prodAPI = "http://localhost/TechStore/ProductService"

/* Endpoint Of The Cart Micro-Service API */
const cartAPI  = "http://localhost/api/cart"

/* Endpoint Of The User Profile Micro-Service API */
const userAPI = "http://localhost/api/UserProfile"

/* Endpoint Of The Subscription Micro-Service API */
const subsAPI = "http://localhost/api/Subscription"

/* Endpoint Of The Order Micro-Service API */
const orderAPI = "http://localhost/api/orders"

/* Endpoint Of The Repport Micro-Service API */
const repportAPI = "http://localhost/repport"

export { cartAPI , authAPI , prodAPI , userAPI , orderAPI , subsAPI , repportAPI };
