//Importaciones
import Usuarios from "../models/Usuarios";
import jwt from "jsonwebtoken";
import config from "../config";
/**
 * Area de trabajo
*/

//agregar usuario
export const registrarse = async (req, res) => {
    const { nombre, clave } = req.body;
    
    const nuevoUsuario = new Usuarios({
        nombre,
        clave: await Usuarios.encryptClave(clave)
    });

    const usuarioSave = await nuevoUsuario.save();
    //console.log(nuevoUsuario)

    
    // devolver token
    const token = jwt.sign({id: usuarioSave._id},config.C_SECRETA,{
        expiresIn:86400
    });
    res.status(200).json({token});


}

//Iniciar sesion
export const sesion = async (req, res) => {

    res.json("hola sesion")

}

//mostrar las peliculas
export const getlistaUsuarios = async (req, res) => {
    
    const usuarios = await Usuarios.find();
    // mensajes de error según sea el caso.
    res.status(200).json(usuarios);
    console.log(usuarios)
}

