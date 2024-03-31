const express = require("express");
const router = express.Router();
const { newOrder,
    getOneOrder,
    myOrders, 
    allOrders,
    updateOrder,
    deleteOrder} = require("../controllers/orderController");
const { isAuthenticatedUser, authorizeRole } = require("../middleware/auth");



router.route("/order/new").post(isAuthenticatedUser, newOrder)//crear nueva orden
router.route("/order/:id").get(isAuthenticatedUser, getOneOrder)//ver una orden
router.route("/orders/yo").get(isAuthenticatedUser, myOrders)//ver todas mis ordenes (usuario Logueado)

// rutas admin

router.route("/admin/orders").get(isAuthenticatedUser,authorizeRole("admin"),allOrders)// ver todas las ordenes (administrador)
router.route("/admin/order/:id").put(isAuthenticatedUser,authorizeRole("admin"),updateOrder)//editar estado de orden 
router.route("/admin/order/:id").delete(isAuthenticatedUser,authorizeRole("admin"),deleteOrder)//eliminar orden 


module.exports = router;