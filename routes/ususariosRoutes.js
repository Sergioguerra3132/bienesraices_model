import express from 'express'
import { formularioLogin } from '../controllers/usuarioController.js';
import { usuarioRegistro } from '../controllers/usuarioController.js';

const router = express.Router();

//Routing
router.use('/login', formularioLogin);

router.use('/registro', usuarioRegistro)

export default router