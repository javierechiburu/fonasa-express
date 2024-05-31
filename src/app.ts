// /my-express-app/src/app.ts

import express, { Application } from "express";
import cors from "cors";
import { setRoutes } from "./routes/index";

const app: Application = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
setRoutes(app);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
