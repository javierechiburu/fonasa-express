import { Router } from "express";
import { UserController } from "../controllers/userController";

export function setUserRoutes(router: Router): void {
  const userController = new UserController();

  router.post("/login", userController.login);
}
