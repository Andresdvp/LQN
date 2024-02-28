const User = require("../models/auth");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//Verificar  si estamos autenticados,(existencia y veracidad del token)

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies

    if (!token) {
        return next(new ErrorHandler("Debe iniciar sesion para acceder a este recurso", 401))
    }


    const decosificada = jwt.decode(token, process.env.JWT_SECRET)
    req.user = await User.findById(decosificada.id);

    next()

});

//Captura el rol

exports.authorizeRole= (...roles)=>{
 return (req,res,next)=>{
    if(!roles.includes(req.user.role)){
        return next (new ErrorHandler(`Role (${req.user.role}) no esta auterizado a entar a esta area`))
    }
    next()
 }
}