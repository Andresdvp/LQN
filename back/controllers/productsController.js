const producto=require("../models/productos")


//ver lista productos
exports.getProducts=(req,res,next)=>{
    res.status(200).json({
        sucess:true,
        message:"En esta ruta puedes ver todos los productos"
    })
}

//crear nuevo producto ver en /api/productos
 
exports.newProduct=async(req,res,next)=>{

    const product =await producto.create(req.body);

    //respuesta 201 y lleve el producto con los datos de product
    res.status(201).json({
        sucess:true,
        product
    })
} 