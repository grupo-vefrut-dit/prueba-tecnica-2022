//importaciones
import { Router } from "express";
const router = Router()
import * as peliculasCtrl from "../controllers/peliculas.controller";

/**
 * Area de trabajo
 */

//ruta para agregar las peliculas
router.post('/',peliculasCtrl.createPeliculas);

//ruta para obtener las peliculas
router.get('/',peliculasCtrl.getPeliculas);

//ruta para obtener las peliculas por ID
router.get('/:peliculasId',peliculasCtrl.getPeliculasById);

//ruta para actualizar las peliculas por ID
router.put('/:peliculasId',peliculasCtrl.updatePeliculasById);

//ruta para eliminar las peliculas por ID
router.delete('/:peliculasId',peliculasCtrl.deletePeliculasById);



//exportamos router
export default router;