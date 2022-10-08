//Importaciones
import Usuarios from "../models/Usuarios";

/**
 * Area de trabajo
*/
//TODO Falta validar aun
//agregar usuario
export const registrarse = async (req, res) => {
    const { nombre, clave } = req.body;
    
    const nuevoUsuario = new Usuarios({
        nombre,
        clave: await Usuarios.encryptClave(clave)
    });
    await nuevoUsuario.save();
    //console.log(nuevoUsuario)

}
//TODO pendiente
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

