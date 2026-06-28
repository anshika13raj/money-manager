/**
 * Handles all transaction APIs.
 */

import fs from "fs";
import { parseCategory } from "../services/parser.js";
import { calculateExpectedSavings } from "../services/rewardEngine.js";
import { calculateAnalytics } from "../services/reducer.js";

// Read transactions from JSON file
const data = JSON.parse(
  fs.readFileSync(
    new URL("../data/transactions.json", import.meta.url),
    "utf8"
  )
);

// Process transactions
let transactions = data.map((transaction) => {
  const category = parseCategory(transaction.message);

  const reward = calculateExpectedSavings(
    transaction.message,
    transaction.amount
  );

  return {
    ...transaction,
    category,
    ...reward,
  };
});

/**
 * GET
 * Returns all transactions.
 */
export const getTransactions = (req, res) => {
  res.json(transactions);
};

/**
 * GET
 * Returns analytics.
 */
export const getAnalytics = (req, res) => {
  res.json(calculateAnalytics(transactions));
};

/**
 * POST
 * Adds a new transaction.
 */
export const addTransaction = (req, res) => {
  const { message, amount } = req.body;

  const transaction = {
    id: transactions.length + 1,
    message,
    amount,
    category: parseCategory(message),
    ...calculateExpectedSavings(message, amount),
  };

  transactions.unshift(transaction);

  res.status(201).json(transaction);
};
