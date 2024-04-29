const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/erros")
const cookieParser =require ("cookie-parser")
const bodyParser= require("body-parser")
const fileUpload =require("express-fileupload")

//uso de constantes importadas
 //va a usar formato json
app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));
//parcee las cookies de mandera global
app.use(cookieParser());
app.use(fileUpload());


//importar rutas
const productos=require("./routes/products")
const usuarios= require("./routes/auth")
const ordenes = require("./routes/orders")

app.use('/api',productos)// sujeto a cambios (ruta del navegador)
app.use('/api',usuarios)
app.use('/api',ordenes)

//Middleware para manejar errores
app.use(errorMiddleware) 



module.exports= app;