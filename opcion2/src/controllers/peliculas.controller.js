//importaciones
import Peliculas from "../models/Peliculas";

/**
 * Area de trabajo
*/

//agregar las peliculas
export const createPeliculas = async (req, res) => {

    const {nombre,año,descripcion,categoria,imgURL} = req.body 
    const newPeliculas = new Peliculas({nombre,año,descripcion,categoria,imgURL})
   
    const peliculasSaved = await newPeliculas.save()
    res.status(201).json(peliculasSaved);

}

//mostrar las peliculas
export const getPeliculas = async (req, res) => {
    
    const peliculas = await Peliculas.find()
    res.status(200).json(peliculas)
}

//obtener las peliculas por ID
export const getPeliculasById = async (req, res) => {
    
    const pelicula = await Peliculas.findById(req.params.peliculasId);
    res.status(200).json(pelicula);
}

//actualizar las peliculas por ID
export const updatePeliculasById = async (req, res) => {

    const updatePelicula = await Peliculas.findByIdAndUpdate(req.params.peliculasId, req.body,{ new: true})
    res.status(200).json(updatePelicula)

}

//Eliminar las peliculas por ID
export const deletePeliculasById = async (req, res) => {

    const deletePelicula = await Peliculas.findOneAndDelete(req.params.peliculasId)
    res.status(204).json("Eliminado")
}