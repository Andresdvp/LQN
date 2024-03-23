const ErrorHandler = require("../utils/errorHandler");

module.exports=(err, req, res, next)=>{
    err.statusCode= err.statusCode || 500;
    err.message= err.message || "Internal server Error";

    res.status(err.statusCode).json({
        success: false,
        message: err.stack
    })

    //Error de clable duplicada en mongoose
    if(err.code===11000){
        const message = `Clave duplicada ${Object.keys(err.keyValue)}`
        error = new ErrorHandler(message,400)
    }

    //error de JWT
    if(err.name=== "JsonWebTokenError"){
        const message ="Tonken de Json Web es invalido, Intentelo de nuevo!"
        error= new ErrorHandler (message,400)
    }

    //JWT token expirado
    if(err.name ==="TokenExpiredError"){
        const message = "el token de JWT esta vencido. Ya expiro. Intentalo de nuevo!"
        error = new ErrorHandler (message,400)
    }

}