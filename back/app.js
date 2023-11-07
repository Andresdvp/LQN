const express = require("express");
const app = express();
 //va a usar formato json
 app.use(express.json());
//importar rutas
const productos=require("./routes/products")

app.use('/api',productos)// sujeto a cambios

module.exports= app;