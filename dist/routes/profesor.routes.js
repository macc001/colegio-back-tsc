"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
var profesor_controller_1 = __importDefault(require("../controller/profesor.controller"));
var ProfesorRouter = /** @class */ (function () {
    function ProfesorRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    ProfesorRouter.prototype.routes = function () {
        this.router.post("/registrar", auth_middleware_1.default.ensureAuth, profesor_controller_1.default.registrar);
    };
    return ProfesorRouter;
}());
var postRoutes = new ProfesorRouter();
exports.default = postRoutes.router;
