import { Request, Response } from "express";
import { Jwt } from "../service/jwt.service";
import { connect } from "../config/database.config";
import { Server } from "../server/server.server";

async function chat(req: Request, res: Response) {
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

async function chat2(req: Request, res: Response) {
  try {
    var { de, cuerpo } = req.body;
    var { id } = req.params;
    const payload = {
      de,
      cuerpo
    };
    res.status(200).send({
      ok: true,
      de,
      cuerpo,
      id
    });
    const serve = Server.instance;
    serve.io.in(id).emit("mensaje-privado", payload);
  } catch (err) {
    res.status(500).send({
      ok: false,
      messagge: "error en la peticion",
      error: err
    });
  }
}

async function chat3(req: Request, res: Response) {
  try {
    var { de, cuerpo } = req.body;
    var { id } = req.params;
    const payload = {
      de,
      cuerpo
    };
    res.status(200).send({
      ok: true,
      de,
      cuerpo,
      id
    });
    const serve = Server.instance;
    serve.io.emit("mensaje-nuevo", payload);
  } catch (err) {
    res.status(500).send({
      ok: false,
      messagge: "error en la peticion",
      error: err
    });
  }
}

export default { chat, chat2, chat3 };
