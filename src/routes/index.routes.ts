import express, { Application } from "express";
// rutas
import loginRoutes from "../routes/login.routes";
import profesorRoutes from "../routes/profesor.routes";
import chatRoutes from "../routes/chat.routes";

export class IndexRouter {
  app: Application;

  constructor() {
    this.app = express();
    this.index_routes();
  }

  private index_routes() {
    this.app.use("/login", loginRoutes);
    this.app.use("/profesor", profesorRoutes);
    this.app.use("/chat", chatRoutes);
  }
}

const postRoutes = new IndexRouter();
export default postRoutes.app;
