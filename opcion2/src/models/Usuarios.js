//Importaciones
import {  Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
/**
 * Area de trabajo
 */

/**
* modelo de datos usuarios
*/
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
});

//metodo para cifrar clave
usuariosSchema.statics.encryptClave = async (clave) => {
    //hash
    const salhash = await bcrypt.genSalt(10);
   return await bcrypt.hash(clave,salhash);

}

//metodo para comparar clave
usuariosSchema.statics.compararClave = async (clave, newClave) => {
   
    return await bcrypt.compare(clave,newClave)
}


export default model('Usuarios', usuariosSchema);