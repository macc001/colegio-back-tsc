import { Socket } from "socket.io";
import socketIO from "socket.io";

import { ListaUsuario } from "../class/listaUsuario.class";
import { Usuario } from "../class/usuario.class";

export const usuariosConectados = new ListaUsuario();

export const conectarCliente = (cliente: Socket) => {
  const usuario = new Usuario(cliente.id);
  usuariosConectados.agregar(usuario);
};

export const desconectar = (cliente: Socket) => {
  cliente.on("disconnect", () => {
    console.log("Cliente desconectado");
    usuariosConectados.borrarUsuario(cliente.id);
  });
};

export const mensaje = (cliente: Socket, io: socketIO.Server) => {
  cliente.on("mensaje", (payload: { de: string; cuerpo: string }) => {
    console.log("Mensaje recibido", payload);
    io.emit("mensaje-nuevo", payload);
  });
};

export const configurarUsuario = (cliente: Socket, io: socketIO.Server) => {
  cliente.on(
    "config-usuario",
    (payload: { nombre: string }, callback: Function) => {
      console.log("Msj recibido", payload.nombre);
      usuariosConectados.actualizarNombre(cliente.id, payload.nombre);
      callback({
        ok: true,
        mensaje: `Usuario ${payload.nombre}, configurado`
      });
    }
  );
};
export function eventDataTime(): string {
  return `${new Date().toLocaleDateString()} / ${new Date().toLocaleTimeString()} `;
}
