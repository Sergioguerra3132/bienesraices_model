import express from 'express'
import { formularioLogin } from '../controllers/usuarioController.js';

const router = express.Router();

//Routing
router.use('/login', formularioLogin );

export default router