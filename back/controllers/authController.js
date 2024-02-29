const User = require("../models/auth");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const tokenEnviado = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

//registrar un nuevo usuario /api/usuario/registro

exports.registroUsuario = catchAsyncErrors(async (req, res, next) => {
    const { nombre, email, password } = req.body;

    const user = await User.create({
        nombre,
        email,
        password,
        avatar: {
            public_id: "600nw-2264922221",
            url: "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"
        }
    })



    tokenEnviado(user, 201, res);
});


//Iniciar secion - login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    //recisar si los campos estan llenos

    if (!email || !password) {
        return next(new ErrorHandler("porfavor ingrese email & contraseña", 400))
    }

    //Revisar si esta en nuestra base de datos
    const user = await User.findOne({ email }).select("password")

    if (!user) {
        return next(new ErrorHandler("Email o contraseña invalidos", 401))
    }

    //comparar contraseñas verificat si esta bien

    const contrasenaOK = await user.compararPass(password);

    if (!contrasenaOK) {
        return next(new ErrorHandler("Contraseña invalida", 401))
    }



    tokenEnviado(user, 200, res);

});

//Cerrar sesion (logout)
exports.logOut = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "Cerro Sesion"
    })
})


//olvide mi contraseña, recuperar contraseña

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return next(new ErrorHandler("Usuario no se encuentra registrado ", 404))
    }

    const resetToken = user.genResetPasswordToken();

    await user.save({ validateBeforeSave: false })

    //crear una url para hacer el reset de la contraseña
    const resetUrl = `${req.protocol}://${req.get("host")}/api/resetPassword/${resetToken}`

    const mensaje = `Hola \n\nTu link para restablecer una nueva contraseña es el 
    siguiente:     \n\n${resetUrl}\n\n
    Si no solicitaste este link, por favor comunicate con soporte.\n\n 
    Att:
    \nLoQueNecesitas Store`

    try {
        await sendEmail({
            email: user.email,
            subject: "LQN Recuperacion de la contraseña",
            mensaje
        })

        res.status(200).json({
            success: true,
            message: `Correo enviado a: ${user.email}`
        })

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });
        return next(new ErrorHandler(error.message, 500))

    }
})

//Recetear Contraseña

exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    //Hash el tokken q llego con la url
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest('hex')
    //buscamos al usuario al que le vamos a recetear la contraseña
    const user = await User.findOne({
        resetPasswordToken,
        //revisa si el token es mayor al momento actual
        resetPasswordExpire: { $gt: Date.now() }
    })

    if(!user){
        return next(new ErrorHandler("EL token es invalido o ya expiro",400))
    }
    if(req.body.password!== req.body.confirmPassword){
        return next(new ErrorHandler("Contraseña no coincide",400))
    }

    //setear la nueva contraseña
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    tokenEnviado(user,200,res)

})