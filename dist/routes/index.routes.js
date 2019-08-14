"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// rutas
var login_routes_1 = __importDefault(require("../routes/login.routes"));
var profesor_routes_1 = __importDefault(require("../routes/profesor.routes"));
var IndexRouter = /** @class */ (function () {
    function IndexRouter() {
        this.app = express_1.default();
        this.index_routes();
    }
    IndexRouter.prototype.index_routes = function () {
        this.app.use("/login", login_routes_1.default);
        this.app.use("/profesor", profesor_routes_1.default);
    };
    return IndexRouter;
}());
exports.IndexRouter = IndexRouter;
var postRoutes = new IndexRouter();
exports.default = postRoutes.app;
