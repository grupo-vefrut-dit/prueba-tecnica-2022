import {
  Sequelize,
  Model,
  DataTypes,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  fn,
} from "sequelize";
import conexion from "../connection/bd";

interface MoviesModel
  extends Model<
    InferAttributes<MoviesModel>,
    InferCreationAttributes<MoviesModel>
  > {
  s_n?: CreationOptional<number>;
  uid?: string;
  cod?: string;
  name: string;
  year?: string;
  description?: string;
  category?: string;
  img?: string;
  public_img?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const Movies = conexion.define<MoviesModel>("movies", {
  s_n: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  uid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },

  cod: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  year: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  public_img: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});

export default Movies;
