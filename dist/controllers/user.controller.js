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
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_models_1 = __importDefault(require("../models/user.models"));
const tokenManager_js_1 = require("../utils/tokenManager.js");
class authController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield user_models_1.default.findOne({ where: { email: req.body.email } });
                if (data === null)
                    return res.status(400).json({
                        error: "No existe este usuario",
                    });
                const passVerify = yield bcrypt_1.default.compare(req.body.password, data.password);
                if (!passVerify)
                    return res.status(401).json({ error: "Contraseña invalida!" });
                const uid = data.uid;
                const { token, expiresIn } = (0, tokenManager_js_1.generateToken)(uid);
                (0, tokenManager_js_1.generateRefreshToken)(uid, res);
                return res.json({
                    token,
                    expiresIn,
                });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: "Error de servidor!" });
            }
        });
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield user_models_1.default.findOne({
                    where: { email: req.body.email },
                });
                if (data)
                    return res.status(400).json({ error: "Este Email esta en uso!" });
                const salt = yield bcrypt_1.default.genSalt(10);
                const password = yield bcrypt_1.default.hash(req.body.password, salt);
                const dataSave = {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: password,
                };
                const user = yield user_models_1.default.create(dataSave);
                res.status(200).json({ ok: true });
            }
            catch (error) {
                console.error(error);
                return res
                    .status(500)
                    .json({ error: "Error de servidor!", detail: error });
            }
        });
    }
    refreshToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.query.uid);
                const user = req.query.uid;
                const { token, expiresIn } = (0, tokenManager_js_1.generateToken)(user.uid);
                return res.json({
                    token,
                    expiresIn,
                });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: "Error de servidor!" });
            }
        });
    }
    logout(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.clearCookie("refreshToken");
                res.json({ Ok: true });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: "Error de servidor!" });
            }
        });
    }
}
exports.default = authController;
