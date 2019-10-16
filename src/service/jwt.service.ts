import * as jwt from "jwt-simple";
const dayjs = require("dayjs"); // por que no esta en typeScript solo esta en js

import config from "../config/global.config";

export class Jwt {
  secre: string;

  constructor() {
    this.secre = config.secret;
  }

  crearToken(user: any): string {
    var payload = {
      // id_user: user[0]["id_usuario"],
      id_usuario: user.id_usuario,
      usuar: user.usuar,
      foto: user.foto,
      email: user.email,
      iat: dayjs().unix(),
      exp: dayjs()
        .add(1, "hour")
        .unix()
    };
    return jwt.encode(payload, config.secret);
  }
}
