import { Router } from "express";

import md_auth from "../middleware/auth.middleware";

import profesorController from "../controller/profesor.controller";

class ProfesorRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.post(
      "/registrar",
      md_auth.ensureAuth,
      profesorController.registrar
    );
  }
}

const postRoutes = new ProfesorRouter();

export default postRoutes.router;
