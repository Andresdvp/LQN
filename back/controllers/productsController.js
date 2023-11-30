
const producto = require("../models/productos")
const fetch = (url)=> import ('node-fetch').then(({default:fetch})=>fetch(url))//usurpacion del import

//CRUD producto

//ver lista productos
//req = requiere, res = respuesta, next = siguiente
exports.getProducts = async (req, res, next) => {
    const productos = await producto.find();
    res.status(200).json({
        sucess: true,
        count: productos.length,
        productos
    })
}



//ver producto por  id
exports.getProductsById = async (req, res, next) => {
    const product = await producto.findById(req.params.id);//variable de tipo modificable
    if (!product) {
        return res.status(404).json({
            sucess: false,
            message: "No encontramos ese producto"
        })
    }

    res.status(200).json({
        sucess: true,
        message: "Aqui debajo encuentras informacion de tu producto: ",
        product
    })

}

//Update de un producto
exports.updateProduct = async (req, res, next) => {
    //buscar por id y mostrar mensaje al usuario de que no se encontro el producto
    let product = await producto.findById(req.params.id);
    if (!product) {
        return res.status(404).json({
            sucess: false,
            message: "No encontramos ese producto"
        })
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
}

//Delete de un producto
exports.deleteProduct = async (req, res, next) => {
    //buscar por id y mostrar mensaje al usuario de que no se encontro el producto
    const product = await producto.findById(req.params.id); 
    if (!product) {
        return res.status(404).json({
            sucess: false,
            message: "No encontramos ese producto"
        })
    }

    //Eliminar el producto
    //el metodo remove es obsoleto para moongose por eso se usa el deleteOne
    await product.deleteOne();

    res.status(200).json({
        sucess:true,
        message:"Producto eliminado exitosamente" 
    })

}  

//clase 6 min 1:37:39

//crear nuevo producto ver en /api/productos

exports.newProduct = async (req, res, next) => {

    const product = await producto.create(req.body);

    //respuesta 201 y lleve el producto con los datos de product
    res.status(201).json({
        sucess: true,
        product
    })
} 


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