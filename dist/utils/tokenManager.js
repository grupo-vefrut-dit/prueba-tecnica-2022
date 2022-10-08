"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRefreshToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_js_1 = __importDefault(require("../inc/config.js"));
const generateToken = (uid) => {
    try {
        const expiresIn = 60 * 15; // 60 * 3
        const token = jsonwebtoken_1.default.sign({ uid }, config_js_1.default.JWT.SECRET, { expiresIn });
        return { token, expiresIn };
    }
    catch (error) {
        console.error(error);
    }
};
exports.generateToken = generateToken;
const generateRefreshToken = (uid, res) => {
    const expiresIn = 60 * 60 * 24 * 30; // 60 * 5
    try {
        const refreshToken = jsonwebtoken_1.default.sign({ uid }, config_js_1.default.JWT.REFRESH, { expiresIn });
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: false,
            expires: new Date(Date.now() + expiresIn * 1000),
        });
    }
    catch (error) {
        console.error(error);
    }
};
exports.generateRefreshToken = generateRefreshToken;
