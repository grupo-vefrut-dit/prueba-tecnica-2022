import { Router } from "express";

import authController from "../controllers/user.controller";
import Validator from "../middlewares/validator";
import { auhToken } from "../middlewares/authToken";
import { refreshToken } from "../middlewares/refreshToken";

const router = Router();
const validator = new Validator();
const controller = new authController();

router.post("/login", validator.login, controller.login);
router.post("/register", validator.register, controller.register);

router.get("/refresh", refreshToken, controller.refreshToken);
router.get("/logout", auhToken, controller.logout);

export default router;
