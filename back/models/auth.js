const moongose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const usuarioSchema = new moongose.Schema({
    nombre: {
        type: String,
        required: [true, "Por favor ingrese el nombre"],
        maxlength: [120, "Nombre no puede tener mas de 120 caracteres"]
    },
    email: {
        type: String,
        required: [true, "Porfavor ingrese el correo electronico"],
        unique: true,
        validate: [validator.isEmail, "Porfavor ingrese un email valido"]
    },
    password: {
        type: String,
        required: [true, "Por favor registre una contraseña"],
        minlength: [8, "Tu contraseña no puede tener menos de 8 caracteres"],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: 'user'
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date

})

//emciptar contraseña solo si es modificada con bcrypt
usuarioSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

//decosifica contraseñas y compara regresa un booleano
usuarioSchema.methods.compararPass = async function (passData) {
    return await bcrypt.compare(passData, this.password)
}



//Retornar un JWT token
usuarioSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_TIEMPO_EXPIRACION
    })
}


//Generar un token para rest password

usuarioSchema.methods.genResetPasswordToken = function ()  {
    const resetToken = crypto.randomBytes(20).toString('hex')

    //hashear Token con crypto
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest('hex')
    //setear Token
    //this.resetPasswordToken = resetToken;

    //Setear fecha de expiraion del Token
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000 //dura solo 30 minutos


    return resetToken
}




module.exports = moongose.model("auth", usuarioSchema)