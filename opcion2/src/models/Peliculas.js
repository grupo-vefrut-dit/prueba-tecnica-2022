//Importaciones
import { Schema, model } from "mongoose";

/**
 * Area de trabajo
 */
const peliculasSchema = new Schema({
    nombre: String,
    año: Date,
    descripcion: String,
    categoria: String,
    imgURL: String
},{
    timestamps: true,
    versionKey: false
})
//nombre, año, descripción, categoría e imagen
export default model('Peliculas',peliculasSchema);