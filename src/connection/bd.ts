import { Sequelize } from "sequelize";
import config from "../inc/config";

//CONEXIÓN A LA BASE DE DATOS CON MYSQL

const conexion = new Sequelize(
  config.DB.DATABASE,
  config.DB.USER,
  config.DB.PASSWORD,
  {
    host: config.DB.HOST,
    dialect: 'mysql',
    logging: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

//EXPORTAR LA CONEXCIÓN
export default conexion;
