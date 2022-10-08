//importaciones
import { Router } from "express";
const router = Router()

/**
 * Area de trabajo
 */

//import { createProduct, getProducts, getProductById, updateProductById, deleteProductById  } from "../controllers/products.controller";
import * as peliculasCtrl from "../controllers/peliculas.controller";

router.post('/',peliculasCtrl.createPeliculas);
router.get('/',peliculasCtrl.getPeliculas);
router.get('/:peliculasId',peliculasCtrl.getPeliculasById);
router.put('/:peliculasId',peliculasCtrl.updatePeliculasById);
router.delete('/:peliculasId',peliculasCtrl.deletePeliculasById);

export default router;