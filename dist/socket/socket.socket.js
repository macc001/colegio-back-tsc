"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.desconectar = function (cliente) {
    cliente.on("disconnect", function () {
        console.log("Cliente desconectado");
    });
};
exports.mensaje = function (cliente, io) {
    cliente.on("mensaje", function (payload) {
        console.log("Mensaje recibido", payload);
        io.emit("mensaje-nuevo", payload);
    });
};
