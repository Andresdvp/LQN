const User = require("../models/auth");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

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

    res.status(201).json({
        success:true,
        user
    })
} )