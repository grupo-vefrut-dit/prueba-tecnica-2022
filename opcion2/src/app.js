//importaciones
import express from "express";
import morgan  from "morgan";
import peliculasRoutes from "./routes/peliculas.routes";
/**
 * Area de trabajo
 */
const app = express()


//modo desarrollador
app.use(morgan('dev'));

//para leer json
app.use(express.json());

app.use('/peliculas',peliculasRoutes)




export default app;