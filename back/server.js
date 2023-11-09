const app = require("./app");
const connectDatabase = require("./config/database");
//setear el archivo de configuracion
const dotenv = require("dotenv");

dotenv.config({path:'back/config/config.env'});


//configurar base de datos
connectDatabase();


//escucha el puerto
const server = app.listen(process.env.PORT, ()=>{
    //regresa que si estoy conectado al servidor
    console.log(`Servidor iniciado en el puerto:  ${process.env.PORT}  en modo:  ${process.env.NODE_ENV}`);
}); 