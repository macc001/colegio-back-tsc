import express from "express";
import cors from "cors";

import socketIO from "socket.io";
import http from "http";

const bodyParser = require("body-parser");
import indexRoutes from "../routes/index.routes";

import * as socket from "../socket/socket.socket";

export class Server {
  private static _instance: Server;
  private app: express.Application;

  public io: socketIO.Server;
  private httpServer: http.Server;

  private constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();

    this.httpServer = new http.Server(this.app);
    this.io = socketIO(this.httpServer);

    this.escucharSocket();
  }

  private escucharSocket() {
    console.log("escuchando conexiones");
    this.io.on("connection", cliente => {
      socket.conectarCliente(cliente);
      socket.configurarUsuario(cliente, this.io);
      socket.mensaje(cliente, this.io);
      socket.desconectar(cliente);
      console.log(socket.eventDataTime());
    });
  }
  public static get instance(): Server {
    return this._instance || (this._instance = new Server());
  }

  private settings() {
    this.app.set("port", this.port || process.env.PORT || 5000);
  }

  private middlewares() {
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
      );
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE"
      );
      res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
      next();
    });
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(cors({ origin: true, credentials: true }));
  }

  private routes() {
    this.app.use(indexRoutes);
  }

  async listen(): Promise<void> {
    await this.httpServer.listen(this.app.get("port"));
    console.log("Server on port", this.app.get("port"));
  }
}
