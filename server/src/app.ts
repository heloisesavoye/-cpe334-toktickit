import express from "express";
import cors from "cors";
import categoriesRouter from "./routes/categories.js";
import relatedSystemsRouter from "./routes/relatedSystems.js";
import requestersRouter from "./routes/requesters.js";
import ticketsRouter from "./routes/tickets.js";
import attachmentsRouter from "./routes/attachments.js";
import { errorHandler } from "./middleware/errorHandler.js";

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

  app.use("/api/categories", categoriesRouter);
  app.use("/api/related-systems", relatedSystemsRouter);
  app.use("/api/requesters", requestersRouter);
  app.use("/api/tickets", ticketsRouter);
  app.use("/api", attachmentsRouter); // mounts /tickets/:id/attachments and /attachments/*

  app.use(errorHandler);

  return app;
}
