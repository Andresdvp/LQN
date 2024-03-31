const express = require("express");
const router = express.Router();

const { getProducts,
    newProduct,
    getProductsById,
    updateProduct,
    deleteProduct,
    createProductReview, 
    getProductsReviews,
    deleteReview} = require("../controllers/productsController");
const { isAuthenticatedUser, authorizeRole } = require("../middleware/auth");
//rutas de productos 
//Probar autenticacion
router.route('/productos').get(getProducts);//establecer desde que ruta queremos ver el getProduct
router.route('/producto/nuevo').post(isAuthenticatedUser, authorizeRole("admin"), newProduct);// ruta del nuevo producto
router.route('/producto/:id').get(getProductsById);//ver producto por id 
router.route('/producto/:id').put(isAuthenticatedUser, authorizeRole("admin"), updateProduct);//Actualizar el producto
router.route('/producto/:id').delete(isAuthenticatedUser, authorizeRole("admin"), deleteProduct);//eliminar producto por id

//comentarios
router.route("/review").put(isAuthenticatedUser, createProductReview)
router.route("/reviews").get(getProductsReviews)
router.route("/review").delete(isAuthenticatedUser,deleteReview)

module.exports = router; 