"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./inc/config"));
const bd_1 = __importDefault(require("./connection/bd"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const movies_routes_1 = __importDefault(require("./routes/movies.routes"));
class Server {
    constructor(app) {
        this.app = app;
    }
    connection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield bd_1.default.authenticate();
                console.log("La conexión se ha establecido con éxito! 😀");
            }
            catch (error) {
                console.error("No se puede conectar a la base de datos:", error);
            }
        });
    }
    listen() {
        const PORT = config_1.default.SERVER.PORT;
        this.app.listen(PORT, () => console.log(`El servidor ha sido inicializado: http://localhost:${PORT}`));
    }
    routes() {
        this.app.use("/api/v1", auth_routes_1.default);
        this.app.use("/api/v1", movies_routes_1.default);
    }
    configCors() {
        const options = {
            allowedHeaders: [
                "Origin",
                "X-Requested-With",
                "Content-Type",
                "Accept",
                "X-Access-Token",
            ],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: config_1.default.ALLOWEDORIGINS,
            preflightContinue: false,
        };
        this.app.use((0, cors_1.default)(options));
    }
    middleware() {
        this.configCors();
        this.app.use(express_1.default.json());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cookie_parser_1.default)());
    }
}
exports.default = Server;
