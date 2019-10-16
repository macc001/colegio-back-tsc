import { Router } from "express";

import md_auth from "../middleware/auth.middleware";

import loginController from "../controller/login.controller";

class LoginRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.post("/ingresar", loginController.login);
    this.router.post(
      "/renovartoken",
      md_auth.ensureAuth,
      loginController.renovartoken
    );
  }
}

const postRoutes = new LoginRouter();
export default postRoutes.router;
