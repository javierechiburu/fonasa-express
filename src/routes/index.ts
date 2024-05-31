// /my-express-app/src/routes/index.ts

import express from "express";
import IndexController from "../controllers/index";
import { setUserRoutes } from "./userRoutes";

export function setRoutes(app: express.Application): void {
  const indexController = new IndexController();

  app.get("/", indexController.getIndex);

  setUserRoutes(app);
}
