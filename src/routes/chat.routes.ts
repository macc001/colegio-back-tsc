import { Router } from "express";

import md_auth from "../middleware/auth.middleware";

import chatController from "../controller/chat.controller";

class ChatRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.post("/priv/:id", chatController.chat2);
    this.router.post("/todos", chatController.chat3);
  }
}

const postRoutes = new ChatRouter();
export default postRoutes.router;
