const express = require("express");
const router = express.Router();

const {getProducts, newProduct, getProductsById, updateProduct, deleteProduct}=require("../controllers/productsController");
const { isAuthenticatedUser,authorizeRole } = require("../middleware/auth");
//rutas de productos 
//Probar autenticacion
router.route('/productos').get(isAuthenticatedUser,authorizeRole("admin","user"), getProducts);//establecer desde que ruta queremos ver el getProduct
router.route('/producto/nuevo').post(newProduct);// ruta del nuevo producto
router.route('/producto/:id').get(getProductsById);//ver producto por id 
router.route('/producto/:id').put(updateProduct);//Actualizar el producto
router.route('/producto/:id').delete(deleteProduct);//eliminar producto por id





module.exports=router; 