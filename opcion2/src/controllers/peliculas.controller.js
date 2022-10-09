//importaciones
import Peliculas from "../models/Peliculas";

/**
 * Area de trabajo
*/

//Registrar película 
export const createPeliculas = async (req, res) => {

    const {nombre,año,descripcion,categoria,imgURL} = req.body 
    const newPeliculas = new Peliculas({nombre,año,descripcion,categoria,imgURL});
    const peliculasSaved = await newPeliculas.save();
    
    // Respuesta para solicitudes HTTP
    res.status(201).json(peliculasSaved);

}

//Listar peliculas
export const getPeliculas = async (req, res) => {
    
    const peliculas = await Peliculas.find();
    
    // Respuesta para solicitudes HTTP
    res.status(200).json(peliculas);
}

//Buscar película por ID
export const getPeliculasById = async (req, res) => {
    
    const pelicula = await Peliculas.findById(req.params.peliculasId);
    
    // Respuesta para solicitudes HTTP
    res.status(200).json(pelicula);
}

//actualizar las peliculas por ID
export const updatePeliculasById = async (req, res) => {

    const updatePelicula = await Peliculas.findByIdAndUpdate(req.params.peliculasId, req.body,{ new: true});
    
    // Respuesta para solicitudes HTTP
    res.status(200).json(updatePelicula);

}

//Eliminar película por ID
export const deletePeliculasById = async (req, res) => {

    const deletePelicula = await Peliculas.findOneAndDelete(req.params.peliculasId);
    
    // Respuesta para solicitudes HTTP
    res.status(204).json("Eliminado");
}