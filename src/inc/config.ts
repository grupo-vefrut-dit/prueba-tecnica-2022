import { config } from "dotenv";

config();

export default {
  JWT: {
    SECRET: process.env.JWTSECRET || "devsecrettoken",
    REFRESH: process.env.JWTREFRESH || "devrefreshtoken",
  },

  DB: {
    HOST: process.env.HOST || "",
    DATABASE: process.env.DATABASE || "",
    USER: process.env.USER || "",
    PASSWORD: process.env.PASSWORD || "",
  },

  SERVER: {
    PORT: process.env.PORT || 3000,
  },

  CLOUDINARY: {
    NAME: process.env.CLOUDINARY_CLOUD_NAME || "",
    KEY: process.env.CLOUDINARY_API_KEY || "",
    SECRET: process.env.CLOUDINARY_API_SECRET || "",
  },

  ALLOWEDORIGINS: process.env.API_URL || "*",
};
