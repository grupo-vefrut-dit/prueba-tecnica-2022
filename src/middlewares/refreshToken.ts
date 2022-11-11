import jwt from "jsonwebtoken";
import config from "../inc/config";

import { Request, Response, NextFunction } from "express";

export const refreshToken = async (
  req: Request<{ uid: string }>,
  res: Response,
  next: NextFunction
) => {
  if (req.headers.authorization) {
    try {
      const refreshTokenCOOKIES = req.cookies.refreshToken;
      if (!refreshTokenCOOKIES)
        return res.status(401).json({ error: "No existe el 'Token' " });

      const uid = <{ uid: string }>(
        jwt.verify(refreshTokenCOOKIES, config.JWT.REFRESH)
      );

      req.query.uid = uid;
      next();
    } catch (error) {
      console.error(error);
      return res.status(401).send({ error: "Token inválido!" });
    }
  }
  return res.status(400).send({ error: "Token de refresco no esta presente!" });
};
