import express from 'express'
import usuarioRoutes from './routes/ususariosRoutes.js'
//Crear app
const app = express();

//Routing
app.use('/auth', usuarioRoutes);

//Habilitar pug
app.set('view engine', 'pug');
app.set('views', './views');

//Carpeta publica
app.use(express.static('public'));

//Definir puerto y arrancar proyecto
const port = 3000;

app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`)
});