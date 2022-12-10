import express, { Application } from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";

import config from "./inc/config";
import conexion from "./connection/bd";
import authRouter from "./routes/auth.routes";
import movieController from "./routes/movies.routes";

class Server {
  private app;

  constructor(app: Application) {
    this.app = app;
  }

  async connection() {
    try {
      await conexion.authenticate();
      console.log("La conexión se ha establecido con éxito! 😀");
    } catch (error) {
      console.error("No se puede conectar a la base de datos:", error);
    }
  }

  listen(): void {
    const PORT = config.SERVER.PORT;
    this.app.listen(PORT, () =>
      console.log(`El servidor ha sido inicializado: http://localhost:${PORT}`)
    );
  }

  routes(): void {
    this.app.use("/api/v1", authRouter);
    this.app.use("/api/v1", movieController);
  }

  configCors(): void {
    const options: cors.CorsOptions = {
      allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "X-Access-Token",
      ],
      credentials: true,
      methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
      origin: config.ALLOWEDORIGINS,
      preflightContinue: false,
    };
    this.app.use(cors(options));
  }

  middleware(): void {
    this.configCors();
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    this.app.use(cookieParser());
  }
}

export default Server;
