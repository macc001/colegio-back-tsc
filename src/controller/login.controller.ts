import { Request, Response } from "express";
import { Jwt } from "../service/jwt.service";
import { connect } from "../config/database.config";

async function login(req: Request, res: Response) {
  const conn = await connect();
  try {
    var { user, passw, token } = req.body;
    if (user) {
      if (passw) {
        const queryy = "select * from login_usuario($1, $2)";
        const posts: any = await conn.query(queryy, [user, passw]);
        const jwt = new Jwt();
        res.status(200).json(posts.rows[0]);
      } else {
        res.status(404).send({
          ok: false,
          messagge: "complete el campo passw"
        });
      }
    } else {
      res.status(404).send({
        ok: false,
        messagge: "complete el campo user"
      });
    }
  } catch (err) {
    res.status(500).send({
      ok: false,
      messagge: "error en la peticion",
      error: err
    });
  }
  await conn.end();
}

async function renovartoken(req: Request, res: Response) {
  try {
    var { token } = req.body;
    const renovar = req.body.autorizacion;
    console.log(renovar);
    if (token) {
      const jwt = new Jwt();
      res.status(200).send({
        ok: true,
        token: jwt.crearToken(renovar)
      });
    } else {
      res.status(404).send({
        ok: false,
        messagge: "complete el token"
      });
    }
  } catch (err) {
    res.status(500).send({
      ok: false,
      messagge: "error en la peticion",
      error: err
    });
  }
}

export default { login, renovartoken };
