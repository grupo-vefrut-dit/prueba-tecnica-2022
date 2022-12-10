"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const validator_1 = __importDefault(require("../middlewares/validator"));
const authToken_1 = require("../middlewares/authToken");
const refreshToken_1 = require("../middlewares/refreshToken");
const router = (0, express_1.Router)();
const validator = new validator_1.default();
const controller = new user_controller_1.default();
router.post("/login", validator.login, controller.login);
router.post("/register", validator.register, controller.register);
router.get("/refresh", refreshToken_1.refreshToken, controller.refreshToken);
router.get("/logout", authToken_1.auhToken, controller.logout);
exports.default = router;
