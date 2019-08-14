"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
var login_controller_1 = __importDefault(require("../controller/login.controller"));
var LoginRouter = /** @class */ (function () {
    function LoginRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    LoginRouter.prototype.routes = function () {
        this.router.post("/ingresar", login_controller_1.default.login);
        this.router.get("/prueba", login_controller_1.default.prueba);
        this.router.post("/renovartoken", auth_middleware_1.default.ensureAuth, login_controller_1.default.renovartoken);
    };
    return LoginRouter;
}());
var postRoutes = new LoginRouter();
exports.default = postRoutes.router;
