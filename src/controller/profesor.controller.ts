import { Request, Response } from "express";
import { connect } from "../config/database.config";

async function registrar(req: Request, res: Response) {
  try {
    var { apellido, nombre, ci, sexo, fecha_nac, titulo } = req.body;
    const conn = await connect();
    if (apellido) {
      if (nombre) {
        if (ci) {
          if (sexo) {
            if (fecha_nac) {
              if (titulo) {
                const query = `CALL registrar_profesor(?,?,?,?,?,?);`;
                var posts: any = await conn.query(query, [
                  apellido,
                  nombre,
                  ci,
                  sexo,
                  fecha_nac,
                  titulo
                ]);
                if (posts[0][0][0].ok === 1) {
                  res.status(200).send({
                    ok: true
                  });
                } else {
                  res.status(200).send({
                    ok: false,
                    messagge: posts[0][0][0].ci
                  });
                }
              } else {
                res.status(404).send({
                  ok: false,
                  messagge: "complete el campo titulo"
                });
              }
            } else {
              res.status(404).send({
                ok: false,
                messagge: "complete fecha_nac"
              });
            }
          } else {
            res.status(404).send({
              ok: false,
              messagge: "seleccione el campo sexo"
            });
          }
        } else {
          res.status(404).send({
            ok: false,
            messagge: "complete el campo ci"
          });
        }
      } else {
        res.status(404).send({
          ok: false,
          messagge: "complete el campo nombre"
        });
      }
    } else {
      res.status(404).send({
        ok: false,
        messagge: "complete el campo apellido"
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

export default { registrar };
