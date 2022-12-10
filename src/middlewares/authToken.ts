import jwt from "jsonwebtoken";
import config from "../inc/config";
import { Request, Response, NextFunction } from "express";

export const auhToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token = req.headers.authorization;

    if (!token) throw new Error("No existe el token en el headers usa Bearer");
    token = token.split(" ")[1];
    const uid = <{ uid: string }>jwt.verify(token, config.JWT.SECRET);
    req.query.uid = uid;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: "¡No autorizado!" });
  }
};
