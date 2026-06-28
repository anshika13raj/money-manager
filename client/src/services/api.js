/**
 * Handles all backend API calls.
 */

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

/**
 * Get all transactions
 */
export const getTransactions = () =>
  API.get("/transactions");

/**
 * Get dashboard analytics
 */
export const getAnalytics = () =>
  API.get("/analytics");

/**
 * Add new transaction
 */
export const addTransaction = (transaction) =>
  API.post("/transactions", transaction);
