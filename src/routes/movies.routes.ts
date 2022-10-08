import { Router } from "express";
import fileUpload from "express-fileupload";
import movieController from "../controllers/movies.controller";
import { auhToken } from "../middlewares/authToken";
import Validator from "../middlewares/validator";

const controller = new movieController();
const validator = new Validator();
const router = Router();

router.get("/movies", auhToken, controller.toList);
router.get("/movies/:id", auhToken, controller.search);
router.post(
  "/movies",
  auhToken,
  fileUpload({ useTempFiles: true, tempFileDir: "./upload" }),
  validator.movies,
  controller.create
);
router.delete("/movies/:id", auhToken, controller.delete);

export default router;
