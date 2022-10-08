import { Request, Response } from "express";
import bcrypt from "bcrypt";

import User from "../models/user.models";
import { generateToken, generateRefreshToken } from "../utils/tokenManager.js";

class authController {
  async login(req: Request, res: Response) {
    try {
      const data = await User.findOne({ where: { email: req.body.email } });

      if (data === null)
        return res.status(400).json({
          error: "No existe este usuario",
        });

      const passVerify = await bcrypt.compare(req.body.password, data.password);

      if (!passVerify)
        return res.status(401).json({ error: "Contraseña invalida!" });
      const uid = <string> data.uid;

      const { token, expiresIn } = <
        {
          token: string;
          expiresIn: number;
        }
      >generateToken(uid);
      generateRefreshToken(uid, res);

      return res.json({
        token,
        expiresIn,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error de servidor!" });
    }
  }

  async register(req: Request, res: Response) {
    try {
      const data = await User.findOne({
        where: { email: req.body.email },
      });

      if (data)
        return res.status(400).json({ error: "Este Email esta en uso!" });

      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.body.password, salt);

      const dataSave = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: password,
      };

      const user = await User.create(dataSave);

      res.status(200).json({ ok: true });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "Error de servidor!", detail: error });
    }
  }

  async refreshToken(req: Request, res: Response) {
    try {
      console.log(req.query.uid);
      const user = <{ uid: string }>req.query.uid;
      const { token, expiresIn } = <
        {
          token: string;
          expiresIn: number;
        }
      >generateToken(user.uid); 
      return res.json({
        token,
        expiresIn,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error de servidor!" });
    }
  }

  async logout(req: Request, res: Response) {
    try {
      res.clearCookie("refreshToken");
      res.json({ Ok: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error de servidor!" });
    }
  }
}

export default authController;
