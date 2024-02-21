const moongose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs")

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

//emciptar contraseña solo si es modificada
usuarioSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

module.exports = moongose.model("auth", usuarioSchema)