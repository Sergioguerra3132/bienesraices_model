import express from 'express'
import { formularioLogin, pruebaCochina } from '../controllers/usuarioController.js';

const router = express.Router();

//Routing
router.use('/login', formularioLogin);

router.use('/prueba', pruebaCochina);

export default router