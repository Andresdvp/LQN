const express = require("express");
const { registroUsuario } = require("../controllers/authController");
const router = express.Router();



router.route('/usuario/registro').post(registroUsuario)//crear el usuario


module.exports=router