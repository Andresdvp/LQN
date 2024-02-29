
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const producto = require("../models/productos");
const ErrorHandler = require("../utils/errorHandler");
const fetch = (url)=> import ('node-fetch').then(({default:fetch})=>fetch(url))//usurpacion del import




//CRUD producto

//ver lista productos
//req = requiere, res = respuesta, next = siguiente
exports.getProducts = catchAsyncErrors( async (req, res, next) => {
    const productos = await producto.find();
    //if para el error
    if (!productos) {
        return next(new ErrorHandler("Informacion no encontrada", 404))
        
    }
    res.status(200).json({
        sucess: true,
        cantidad: productos.length,
        productos
    })
})



//ver producto por  id
exports.getProductsById = catchAsyncErrors( async (req, res, next) => {
    const product = await producto.findById(req.params.id);//variable de tipo modificable
    if (!product) {
        return next(new ErrorHandler("Producto no encontrado", 404))
        
    }

    res.status(200).json({
        sucess: true, 
        message: "Aqui debajo encuentras informacion de tu producto: ",
        product
    })
})

//Update de un producto
exports.updateProduct =catchAsyncErrors( async (req, res, next) => {
    //buscar por id y mostrar mensaje al usuario de que no se encontro el producto
    let product = await producto.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Producto no encontrado", 404))
        
    }

    //buscar por id y actualizar
    product = await producto.findByIdAndUpdate(req.params.id, req.body, {
        //verifica solo el campo actualizado y lo cambia
        new: true,
        runValidators: true
    })
    res.status(200).json({
        sucess: true,
        message: "Producto actualizado exitosamente",
        product
    })
})

//Delete de un producto
exports.deleteProduct =catchAsyncErrors( async (req, res, next) => {
    //buscar por id y mostrar mensaje al usuario de que no se encontro el producto
    const product = await producto.findById(req.params.id); 
    if (!product) {
        return next(new ErrorHandler("Producto no encontrado", 404))
        
    }

    //Eliminar el producto
    //el metodo remove es obsoleto para moongose por eso se usa el deleteOne
    await product.deleteOne();

    res.status(200).json({
        sucess:true,
        message:"Producto eliminado exitosamente" 
    })

}  )



//crear nuevo producto ver en /api/productos

exports.newProduct =  catchAsyncErrors( async (req, res, next) => {
    req.body.user= req.user.id;
    const product = await producto.create(req.body);
    

    //respuesta 201 y lleve el producto con los datos de product
    res.status(201).json({
        sucess: true,
        product
    })
} )


//fetch
//ver todos los productos 
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
//verProductos();
 
//ver pir id

function verProductosPorID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))

}

//verProductosPorID('655bfdcc48c3f03df3d938d8'); // ver producto por id 