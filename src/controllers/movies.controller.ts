import { Request, Response } from "express";
import { QueryTypes } from "sequelize";
import fs from "fs-extra";
import fileUpload from "express-fileupload";
import Movies from "../models/movies.models";
import conexion from "../connection/bd";
import { uploadFile, deleteFile } from "../utils/cloudinary.js";

class movieController {
  async toList(req: Request, res: Response) {
    try {
      const { sort, limit, page, search_by_name } = req.body;

      const splitString = sort.split("-");
      const sort_column = splitString[0];
      const sort_by = splitString[1];

      const data = await conexion.query(
        `select cod,name,year,description,category,img from movies where name LIKE '%${search_by_name}%' ORDER BY ${sort_column} ${sort_by} limit ${limit} OFFSET ${page};`,
        {
          type: QueryTypes.SELECT,
          raw: true,
        }
      );
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error de servidor!" });
    }
  }
  async search(req: Request, res: Response) {
    try {
      const data = await Movies.findOne({
        where: { uid: req.params.id },
        attributes: {
          exclude: ["s_n", "uid", "public_img", "createdAt", "updatedAt"],
        },
      });
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error de servidor!" });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const users = <{ uid: string }>req.query.uid;

      const img = req.files?.img as fileUpload.UploadedFile;
      const coverImg = await uploadFile(img.tempFilePath);
      await fs.unlink(img.tempFilePath);

      const data = {
        uid: users.uid,
        name: req.body.name,
        year: req.body.year,
        description: req.body.description,
        category: req.body.category,
        img: coverImg.secure_url,
        public_img: coverImg.public_id,
      };

      const user = await Movies.create(data);

      res.status(200).json({ ok: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error de servidor!" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const img = <{ public_img: string }>(
        await Movies.findOne({ where: { cod: req.params.id } })
      );
      deleteFile(img.public_img);

      const data = await Movies.destroy({
        where: { cod: req.params.id },
      });

      data == 1
        ? res.json({ ok: true })
        : res.json({ error: "Error de servidor!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error de servidor!" });
    }
  }
}

export default movieController;
