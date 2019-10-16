"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listaUsuario_class_1 = require("../class/listaUsuario.class");
var usuario_class_1 = require("../class/usuario.class");
exports.usuariosConectados = new listaUsuario_class_1.ListaUsuario();
exports.conectarCliente = function (cliente) {
    var usuario = new usuario_class_1.Usuario(cliente.id);
    exports.usuariosConectados.agregar(usuario);
};
exports.desconectar = function (cliente) {
    cliente.on("disconnect", function () {
        console.log("Cliente desconectado");
        exports.usuariosConectados.borrarUsuario(cliente.id);
    });
};
exports.mensaje = function (cliente, io) {
    cliente.on("mensaje", function (payload) {
        console.log("Mensaje recibido", payload);
        io.emit("mensaje-nuevo", payload);
    });
};
exports.configurarUsuario = function (cliente, io) {
    cliente.on("config-usuario", function (payload, callback) {
        console.log("Msj recibido", payload.nombre);
        exports.usuariosConectados.actualizarNombre(cliente.id, payload.nombre);
        callback({
            ok: true,
            mensaje: "Usuario " + payload.nombre + ", configurado"
        });
    });
};
function eventDataTime() {
    return new Date().toLocaleDateString() + " / " + new Date().toLocaleTimeString() + " ";
}
exports.eventDataTime = eventDataTime;
