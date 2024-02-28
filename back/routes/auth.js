const express = require("express");
const { registroUsuario, loginUser } = require("../controllers/authController");
const router = express.Router();



router.route('/usuario/registro').post(registroUsuario)//crear el usuario
router.route('/login').get(loginUser)//login de usuario

module.exports=router