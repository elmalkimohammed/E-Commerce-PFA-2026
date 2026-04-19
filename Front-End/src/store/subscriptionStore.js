// Simple store using localStorage
let listeners = [];

// Initial state from localStorage
let state = {
  isSubscribed: localStorage.getItem("isSubscribed") === "true",
  plan: localStorage.getItem("subscriptionPlan") ? JSON.parse(localStorage.getItem("subscriptionPlan")) : null,
  subscriptionDate: localStorage.getItem("subscriptionDate") || null
};

// Notify all listeners when state changes
const notifyListeners = () => {
  listeners.forEach(listener => listener(state));
};

// Save to localStorage and update state
const updateState = (newState) => {
  state = { ...state, ...newState };
  
  // Persist to localStorage
  if (newState.isSubscribed !== undefined) {
    localStorage.setItem("isSubscribed", newState.isSubscribed);
  }
  if (newState.plan !== undefined) {
    localStorage.setItem("subscriptionPlan", JSON.stringify(newState.plan));
  }
  if (newState.subscriptionDate !== undefined) {
    localStorage.setItem("subscriptionDate", newState.subscriptionDate);
  }
  
  notifyListeners();
};

// Subscribe to store changes (for React components)
export const useSubscriptionStore = () => {
  const [localState, setLocalState] = useState(state);
  
  useEffect(() => {
    const listener = (newState) => setLocalState({ ...newState });
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }, []);
  
  return {
    ...localState,
    subscribe: (plan) => {
      updateState({
        isSubscribed: true,
        plan: plan,
        subscriptionDate: new Date().toISOString()
      });
    },
    unsubscribe: () => {
      updateState({
        isSubscribed: false,
        plan: null,
        subscriptionDate: null
      });
    },
    checkSubscription: () => {
      const isSubscribed = localStorage.getItem("isSubscribed") === "true";
      const plan = localStorage.getItem("subscriptionPlan") ? JSON.parse(localStorage.getItem("subscriptionPlan")) : null;
      updateState({ isSubscribed, plan });
    }
  };
};

// Import React hooks at the top of file
import { useState, useEffect } from "react";