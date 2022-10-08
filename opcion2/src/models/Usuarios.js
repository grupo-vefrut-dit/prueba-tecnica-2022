//Importaciones
import {  Schema,model } from "mongoose";

/**
 * Area de trabajo
 */

//modelo de datos usuarios
const usuariosSchema = new Schema({
    nombre: {
        type: String,
        unique: true
    },
    clave: {
        type: String,
        unique: true
    }
}, {
    timestamps: true,
    versionKey: false
})
//nombre, año, descripción, categoría e imagen
export default model('Usuarios', usuariosSchema);