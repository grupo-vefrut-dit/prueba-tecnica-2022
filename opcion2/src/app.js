//importaciones
import express from "express";
import morgan  from "morgan";
import peliculasRoutes from "./routes/peliculas.routes";
import authRoutes from "./routes/auth.routes";

/**
 * Area de trabajo
 */

//app
const app = express()


//modo desarrollador
app.use(morgan('dev'));

//para leer json
app.use(express.json());

//API 
app.use('/api/peliculas',peliculasRoutes);
app.use('/api/auth',authRoutes);



//exportamos app
export default app;