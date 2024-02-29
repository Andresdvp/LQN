const express = require("express");
const { registroUsuario, loginUser, logOut, forgotPassword, resetPassword } = require("../controllers/authController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();



router.route('/usuario/registro').post(registroUsuario)//crear el usuario
router.route('/login').get(loginUser)//login de usuario
router.route("/logout").get(isAuthenticatedUser,logOut)//Cerrar sesion
router.route("/forgotPassword").post(forgotPassword)// correo para recetear contraseña
router.route("/resetPassword/:token").post(resetPassword)//recetear contraseña

module.exports=router