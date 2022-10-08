"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const fs_extra_1 = __importDefault(require("fs-extra"));
const movies_models_1 = __importDefault(require("../models/movies.models"));
const bd_1 = __importDefault(require("../connection/bd"));
const cloudinary_js_1 = require("../utils/cloudinary.js");
class movieController {
    toList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { sort, limit, page, search_by_name } = req.body;
                const splitString = sort.split("-");
                const sort_column = splitString[0];
                const sort_by = splitString[1];
                const data = yield bd_1.default.query(`select cod,name,year,description,category,img from movies where name LIKE '%${search_by_name}%' ORDER BY ${sort_column} ${sort_by} limit ${limit} OFFSET ${page};`, {
                    type: sequelize_1.QueryTypes.SELECT,
                    raw: true,
                });
                return res.status(200).json(data);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: "Error de servidor!" });
            }
        });
    }
    search(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield movies_models_1.default.findOne({
                    where: { uid: req.params.id },
                    attributes: {
                        exclude: ["s_n", "uid", "public_img", "createdAt", "updatedAt"],
                    },
                });
                return res.status(200).json(data);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: "Error de servidor!" });
            }
        });
    }
    create(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = req.query.uid;
                const img = (_a = req.files) === null || _a === void 0 ? void 0 : _a.img;
                const coverImg = yield (0, cloudinary_js_1.uploadFile)(img.tempFilePath);
                yield fs_extra_1.default.unlink(img.tempFilePath);
                const data = {
                    uid: users.uid,
                    name: req.body.name,
                    year: req.body.year,
                    description: req.body.description,
                    category: req.body.category,
                    img: coverImg.secure_url,
                    public_img: coverImg.public_id,
                };
                const user = yield movies_models_1.default.create(data);
                res.status(200).json({ ok: true });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: "Error de servidor!" });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const img = (yield movies_models_1.default.findOne({ where: { cod: req.params.id } }));
                (0, cloudinary_js_1.deleteFile)(img.public_img);
                const data = yield movies_models_1.default.destroy({
                    where: { cod: req.params.id },
                });
                data == 1
                    ? res.json({ ok: true })
                    : res.json({ error: "Error de servidor!" });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: "Error de servidor!" });
            }
        });
    }
}
exports.default = movieController;
