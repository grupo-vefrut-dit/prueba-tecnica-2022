//importaciones
import { Router } from "express";
const router = Router()
import * as authCtrl from '../controllers/auth.controller'

/**
 * Area de trabajo
*/


//Registrar usuario
router.post('/registrarse',authCtrl.registrarse);

//Iniciar Sesión ó login
router.post('/sesion',authCtrl.sesion);

//listar todos los usuarios
router.get('/listaUsuarios',authCtrl.getlistaUsuarios);

//exportamos router
export default router;