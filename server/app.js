/**
 * Main Express configuration.
 */

import express from "express";
import cors from "cors";

import transactionRoutes from "./routes/transactionRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", transactionRoutes);

export default app;
