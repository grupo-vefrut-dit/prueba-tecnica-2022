"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../inc/config"));
//CONEXIÓN A LA BASE DE DATOS CON MYSQL
const conexion = new sequelize_1.Sequelize(config_1.default.DB.DATABASE, config_1.default.DB.USER, config_1.default.DB.PASSWORD, {
    host: config_1.default.DB.HOST,
    dialect: 'mysql',
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});
//EXPORTAR LA CONEXCIÓN
exports.default = conexion;
