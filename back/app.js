const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/erros")


 //va a usar formato json
 app.use(express.json());
//importar rutas
const productos=require("./routes/products")
const usuarios= require("./routes/auth")

app.use('/api',productos)// sujeto a cambios (ruta del navegador)
app.use('/api',usuarios)

//Middleware para manejar errores
app.use(errorMiddleware) 


module.exports= app;