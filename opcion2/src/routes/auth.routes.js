//importaciones
import { Router } from "express";
const router = Router()
import * as authCtrl from '../controllers/auth.controller'

/**
 * Area de trabajo
*/


//Registrar usuario
router.post('/registrar',authCtrl.registrarse);

//Iniciar Sesión ó login
router.post('/sesion',authCtrl.sesion);


//exportamos router
export default router;