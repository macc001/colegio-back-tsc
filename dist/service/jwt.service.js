"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = __importStar(require("jwt-simple"));
var dayjs = require("dayjs"); // por que no esta en typeScript solo esta en js
var global_config_1 = __importDefault(require("../config/global.config"));
var Jwt = /** @class */ (function () {
    function Jwt() {
        this.secre = global_config_1.default.secret;
    }
    Jwt.prototype.crearToken = function (user) {
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
        return jwt.encode(payload, global_config_1.default.secret);
    };
    return Jwt;
}());
exports.Jwt = Jwt;
