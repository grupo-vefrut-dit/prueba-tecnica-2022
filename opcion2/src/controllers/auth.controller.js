//Importaciones
import Usuarios from "../models/Usuarios";
import jwt from "jsonwebtoken";
import config from "../config";
/**
 * Area de trabajo
*/

//Registrar usuario
export const registrarse = async (req, res) => {
    
    //guardamos lo que viene del body
    const { nombre, clave } = req.body;
    
    //objeto nuevoUsuario con clave encryptada
    const nuevoUsuario = new Usuarios({
        nombre,
        clave: await Usuarios.encryptClave(clave)
    });

    //guardamos en la DB
    const usuarioSave = await nuevoUsuario.save();
   
    // devolver token
    const token = jwt.sign({id: usuarioSave._id},config.C_SECRETA,{
        //Refrescar token
        expiresIn:300 //5 minutos
    });

    // Respuesta para solicitudes HTTP
    res.status(200).json({token});

}

//Iniciar sesion
export const sesion = async (req, res) => {
    
    //Logear al usuario y devolver token
    const sesionUsuario = await Usuarios.findOne({nombre: req.body.nombre});
    if(!sesionUsuario) return res.status(400).json({message: "Usuario no encontrado"})
    
    //comparamos la clave que viene del frontend con la registrada en mongodb
    const compararClave = await Usuarios.compararClave(req.body.clave, sesionUsuario.clave)
    //  Respuesta para solicitudes HTTP
    if(!compararClave) return res.status(401).json({token: null, message:"Clave Incorrecta"})

     // devolver token 
     const token = jwt.sign({id: sesionUsuario._id},config.C_SECRETA,{
        //Refrescar token
        expiresIn:300 //5 minutos
        });

   // Respuesta para solicitudes HTTP
    res.status(200).json({token});

}

//mostrar los usuarios
export const getlistaUsuarios = async (req, res) => {
    
    const usuarios = await Usuarios.find();
    
    // Respuesta para solicitudes HTTP
    res.status(200).json(usuarios);
    //console.log(usuarios)
}

