import { Request, Response } from "express";
import AuthService from "../services/authService";

export class UserController {
  private authService: AuthService;

  constructor() {
    const secretKey = "secret-key";
    this.authService = new AuthService(secretKey);
  }

  public login = (req: Request, res: Response): void => {
    const { username, password } = req.body;

    try {
      const data = this.authService.login(username, password);

      if (data) {
        res.status(200).json(data);
      } else {
        res.status(401).json({ message: "Invalid username or password" });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred" });
      }
    }
  };
}
