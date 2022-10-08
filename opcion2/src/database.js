//importaciones
import mongoose from "mongoose";
require("dotenv").config();

/**
 * Area de trabajo
 * 
*/

mongoose.connect("mongodb+srv://valverde:OJNku7QmuTfeNHu4@cluster0.4sndrr5.mongodb.net/test",{
    useNewUrlParser: true,
    useUnifiedTopology: true
    
})
.then(db => console.log("conexion exitosa"))
.catch(error => console.log("error"))
