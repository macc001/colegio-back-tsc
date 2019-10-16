import { Request, Response, NextFunction } from "express";
import * as jwt from "jwt-simple";
const dayjs = require("dayjs"); // por que no esta en typeScript solo esta en js

import config from "../config/global.config";

async function ensureAuth(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.headers.authorization) {
      return res.status(403).send({
        mensage: "la peticion no tiene cabecera de authorization"
      });
    }
    var token = req.headers.authorization.replace(/['"]+/g, "");
    var payload = jwt.decode(token, config.secret);
    if (payload.exp <= dayjs().unix()) {
      return res.status(401).send({
        mensage: "el token ha expirado"
      });
    }
  } catch (err) {
    return res.status(404).send({
      error: err,
      mensage: "el token no es valido"
    });
  }
  req.body.autorizacion = payload;
  next();
}
export default { ensureAuth };
