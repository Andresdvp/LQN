const express = require("express");
const router = express.Router();

const {getProducts, newProduct}=require("../controllers/productsController")

router.route('/productos').get(getProducts)//establecer desde que ruta queremos ver el getProduct
router.route('producto/nuevo').post(newProduct)// ruta del nuevo producto

module.exports=router;