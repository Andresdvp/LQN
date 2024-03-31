const express = require("express");
const { registroUsuario, loginUser, logOut, forgotPassword, resetPassword, getUserProfile, updatePassword, updateProfile, getAllUsers, getUserDetails, updateUser, deleteUser } = require("../controllers/authController");
const { isAuthenticatedUser, authorizeRole } = require("../middleware/auth");
const router = express.Router();



router.route('/usuario/registro').post(registroUsuario)//crear el usuario
router.route('/login').post(loginUser)//login de usuario
router.route("/logout").get(isAuthenticatedUser,logOut)//Cerrar sesion
router.route("/forgotPassword").post(forgotPassword)// correo para recetear contraseña
router.route("/resetPassword/:token").post(resetPassword)//recetear contraseña
router.route("/yo").get(isAuthenticatedUser, getUserProfile)// ver mi perfil 
router.route("/yo/updatePassword").put(isAuthenticatedUser, updatePassword)//Actualizar contraseña desde el perfil
router.route("/yo/updateProfile").put(isAuthenticatedUser, updateProfile)//Actualizar el perfil

//rutas admin
router.route("/admin/allUsers").get(isAuthenticatedUser,authorizeRole("admin"),getAllUsers)//ver todos los usuarios
router.route("/admin/user/:id").get(isAuthenticatedUser,authorizeRole("admin"),getUserDetails)//ver detalles de usuario
router.route('/admin/updateUser/:id').put(isAuthenticatedUser,authorizeRole("admin"),updateUser)//actualizar usuario (como admin)
router.route("/admin/deleteUser/:id").delete(isAuthenticatedUser,authorizeRole("admin"),deleteUser)

module.exports=router