/**
 * Defines API routes.
 */

import express from "express";

import {

    getTransactions,

    addTransaction,

    getAnalytics

} from "../controllers/transactionController.js";

const router = express.Router();

router.get("/transactions", getTransactions);

router.post("/transactions", addTransaction);

router.get("/analytics", getAnalytics);

export default router;
