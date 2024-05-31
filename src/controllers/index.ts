// /my-express-app/src/controllers/index.ts

import { Request, Response } from "express";

class IndexController {
  getIndex(req: Request, res: Response): void {
    res.send("Welcome");
  }
}

export default IndexController;
