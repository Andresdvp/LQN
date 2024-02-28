//Crear y enciar un token guardado en un cookie

const tokenEnviado = (user, statusCode,res)=>{

    //creamos el token
    const token = user.getJwtToken();

    //Opciones del token
    const Opciones ={
        expires: new Date(
            //se suma en mili segundos (el dia precente + 1* 24H *60MIN *60SEG * 1000 MIli SEG)
            Date.now() + process.env.COOKIE_EXPIRES_TIME *24*60*60*1000
        ),
        httpOnly:true
    }

    res.status(statusCode).cookie("token", token, Opciones).json({
        success:true,
        token,
        user
    })

}

module.exports = tokenEnviado;