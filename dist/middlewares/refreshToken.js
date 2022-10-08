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
exports.refreshToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../inc/config"));
const refreshToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.headers.authorization) {
        try {
            const refreshTokenCOOKIES = req.cookies.refreshToken;
            if (!refreshTokenCOOKIES)
                return res.status(401).json({ error: "No existe el 'Token' " });
            const uid = (jsonwebtoken_1.default.verify(refreshTokenCOOKIES, config_1.default.JWT.REFRESH));
            req.query.uid = uid;
            next();
            return next();
        }
        catch (error) {
            console.error(error);
            return res.status(401).send({ error: "Token inválido!" });
        }
    }
    return res.status(400).send({ error: "Token de refresco no esta presente!" });
});
exports.refreshToken = refreshToken;
