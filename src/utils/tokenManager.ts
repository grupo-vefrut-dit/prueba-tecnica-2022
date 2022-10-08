import jwt from "jsonwebtoken";
import config from "../inc/config.js";
import { Request, Response, NextFunction } from "express";

export const generateToken = (uid: String) => {
  try {
    const expiresIn = 60 * 15; // 60 * 3
    const token = jwt.sign({ uid }, config.JWT.SECRET, { expiresIn });
    return { token, expiresIn };
  } catch (error) {
    console.error(error);
  }
};

export const generateRefreshToken = (uid: String, res: Response) => {
  const expiresIn = 60 * 60 * 24 * 30; // 60 * 5

  try {
    const refreshToken = jwt.sign({ uid }, config.JWT.REFRESH, { expiresIn });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      expires: new Date(Date.now() + expiresIn * 1000),
    });
  } catch (error) {
    console.error(error);
  }
};
