"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_service_1 = require("../service/jwt.service");
var database_config_1 = require("../config/database.config");
function login(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var conn, _a, user, passw, token, queryy, posts, jwt, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, database_config_1.connect()];
                case 1:
                    conn = _b.sent();
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 8, , 9]);
                    _a = req.body, user = _a.user, passw = _a.passw, token = _a.token;
                    if (!user) return [3 /*break*/, 6];
                    if (!passw) return [3 /*break*/, 4];
                    queryy = "select * from login_usuario($1, $2)";
                    return [4 /*yield*/, conn.query(queryy, [user, passw])];
                case 3:
                    posts = _b.sent();
                    jwt = new jwt_service_1.Jwt();
                    res.status(200).json(posts.rows[0]);
                    return [3 /*break*/, 5];
                case 4:
                    res.status(404).send({
                        ok: false,
                        messagge: "complete el campo passw"
                    });
                    _b.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    res.status(404).send({
                        ok: false,
                        messagge: "complete el campo user"
                    });
                    _b.label = 7;
                case 7: return [3 /*break*/, 9];
                case 8:
                    err_1 = _b.sent();
                    res.status(500).send({
                        ok: false,
                        messagge: "error en la peticion",
                        error: err_1
                    });
                    return [3 /*break*/, 9];
                case 9:
                    conn.end();
                    return [2 /*return*/];
            }
        });
    });
}
function renovartoken(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var token, renovar, jwt;
        return __generator(this, function (_a) {
            try {
                token = req.body.token;
                renovar = req.body.autorizacion;
                console.log(renovar);
                if (token) {
                    jwt = new jwt_service_1.Jwt();
                    res.status(200).send({
                        ok: true,
                        token: jwt.crearToken(renovar)
                    });
                }
                else {
                    res.status(404).send({
                        ok: false,
                        messagge: "complete el token"
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    ok: false,
                    messagge: "error en la peticion",
                    error: err
                });
            }
            return [2 /*return*/];
        });
    });
}
exports.default = { login: login, renovartoken: renovartoken };
