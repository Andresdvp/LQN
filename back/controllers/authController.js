const User = require("../models/auth");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const tokenEnviado = require("../utils/jwtToken");

//registrar un nuevo usuario /api/usuario/registro

exports.registroUsuario= catchAsyncErrors( async(req,res,next)=>{
    const {nombre, email, password} = req.body;

    const user = await User.create({
        nombre,
        email,
        password,
        avatar:{
            public_id:"600nw-2264922221",
            url:"https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"
        }
    })

   

    tokenEnviado(user,201,res);
} );


//Iniciar secion - login
exports.loginUser = catchAsyncErrors(async(req,res,next)=>{
    const {email,password} =req.body;

    //recisar si los campos estan llenos

    if (!email || !password) {
        return next(new ErrorHandler("porfavor ingrese email & contraseña",400))
    }

    //Revisar si esta en nuestra base de datos
    const user = await User.findOne({email}).select("password")

    if (!user) {
        return next(new ErrorHandler("Email o contraseña invalidos", 401))
    }

    //comparar contraseñas verificat si esta bien

    const contrasenaOK = await user.compararPass(password);

    if(!contrasenaOK){
        return next(new ErrorHandler("Contraseña invalida", 401))
    }

    

    tokenEnviado(user,200,res);

});