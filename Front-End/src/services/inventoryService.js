import axios from "axios";
import { cartAPI, orderAPI, prodAPI, reviewAPI } from "./servicesAPI";
console.log(localStorage.getItem("generatedJWT_Token"));

function getAuthHeaders() {
  
  const token = localStorage.getItem("generatedJWT_Token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// ---------------- PRODUCTS ----------------
export async function getAllProducts() {
  try {
    const response = await axios.get(prodAPI, {
      headers: getAuthHeaders(),
    });
    return response.data || [];
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err;
  }
}

// ---------------- ORDERS ----------------
export async function getAllOrders() {
  try {
    const response = await axios.get(`${orderAPI}/all`, {
      headers: getAuthHeaders(),
    });
    return response.data || [];
  } catch (err) {
    console.error("Error fetching orders:", err);
    throw err;
  }
}

// ---------------- CREATE ORDER (ADD THIS) ----------------
export function createOrder(payload) {
  return axios.post(orderAPI, payload, {
    headers: getAuthHeaders(),
  });
}

// ---------------- CARTS ----------------
export async function getAllCarts() {
  try {
    const response = await axios.get(`${cartAPI}/all`, {
      headers: getAuthHeaders(),
    });
    return response.data || [];
  } catch (err) {
    console.error("Error fetching carts:", err);
    throw err;
  }
}
export function addToCart(payload) {
  return axios.post(`${cartAPI}addToCart`, payload, {
    headers: getAuthHeaders(),
  });
}
export function getUserCart() {
  return axios.get(`${cartAPI}getCart`, {
    headers: getAuthHeaders(),
  });
}
export function updateCartStock(payload) {
  return axios.put(`${cartAPI}updateStock`, payload, {
    headers: getAuthHeaders(),
  });
}

export function deleteCartItem(productId) {
  return axios.delete(
    `${cartAPI}deleteItem/${productId}`,
    {
      headers: getAuthHeaders(),
    }
  );
}

export function clearCart() {
  return axios.post(
    `${cartAPI}clearCart`,
    {},
    {
      headers: getAuthHeaders(),
    }
  );
}

// ---------------- REVIEWS ----------------
export async function getAllReviews() {
  try {
    const response = await axios.get(`${reviewAPI}/all`, {
      headers: getAuthHeaders(),
    });
    return response.data || [];
  } catch (err) {
    console.error("Error fetching reviews:", err);
    throw err;
  }
}

// ---------------- PRODUCT CRUD ----------------
export function createProduct(payload) {
  return axios.post(`${prodAPI}`, payload, {
    headers: getAuthHeaders(),
  });
}

export function updateProduct(payload) {
  return axios.put(`${prodAPI}`, payload, {
    headers: getAuthHeaders(),
  });
}

export function deleteProduct(productId) {
  return axios.delete(`${prodAPI}${productId}`, {
    headers: getAuthHeaders(),
  });
}

// ---------------- ORDER ACTIONS ----------------
export function updateOrderStatus(orderId, status) {
  return axios.put(
    `${orderAPI}/${orderId}/status`,
    { status },
    { headers: getAuthHeaders() }
  );
}

export function cancelOrder(orderId) {
  return axios.delete(`${orderAPI}/${orderId}`, {
    headers: getAuthHeaders(),
  });
}

// ---------------- REVIEW CRUD ----------------
export function createReview(payload) {
  return axios.post(reviewAPI, payload, {
    headers: getAuthHeaders(),
  });
}

export function updateReview(reviewId, payload) {
  return axios.put(`${reviewAPI}/${reviewId}`, payload, {
    headers: getAuthHeaders(),
  });
}

export function deleteReview(reviewId) {
  return axios.delete(`${reviewAPI}/${reviewId}`, {
    headers: getAuthHeaders(),
  });
}