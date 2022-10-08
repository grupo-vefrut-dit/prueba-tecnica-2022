"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const movies_controller_1 = __importDefault(require("../controllers/movies.controller"));
const authToken_1 = require("../middlewares/authToken");
const validator_1 = __importDefault(require("../middlewares/validator"));
const controller = new movies_controller_1.default();
const validator = new validator_1.default();
const router = (0, express_1.Router)();
router.get("/movies", authToken_1.auhToken, controller.toList);
router.get("/movies/:id", authToken_1.auhToken, controller.search);
router.post("/movies", authToken_1.auhToken, (0, express_fileupload_1.default)({ useTempFiles: true, tempFileDir: "./upload" }), validator.movies, controller.create);
router.delete("/movies/:id", authToken_1.auhToken, controller.delete);
exports.default = router;
