const mongoose = require("mongoose"); 

//diseña el archivo para que replase los valores a un json  del producto
const productosSchema=mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Por favor registra el nombre del producto."],
        //establece que los espacios al inicio y al final los elimine
        trim: true,
        maxLength: [120, "El nombre del producto no puede exceder los 120 caracteres."]
    },
    precio: {
        type: Number,
        required: [true, "Por favor registre el precio del producto."],
        maxLength: [8, "El precio no puede estar por en cima de 99'999.999"],
        default: 0.0
    },
    descripcion: {
        type: String,
        required: [true, "Por favor escribe una descripcion pata el producto."]
    },
    calificacion: {
        type: Number,
        default: 0
    },
    imagen: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    categoria: {
        type: String,
        required: [true, "Porfavor seleccione la categoria del producto"],
        //enumera la lista 
        enum: {
            values: [
                "Electronica",
                "Hogar",
                "Cursos",
                "cuidado e Higiene",
                "Accesorios",
                "Snacks",
                "Juguetes",
                "Ropa",
            ]
        }
    },
    vendedor: {
        type: String,
        required: [true, "Porfavor registre el vendedor del producto"]
    },
    inventario: {
        type: Number,
        require: [true, "Por favor el stok del producto"],
        maxLength: [5, "Cantidad maxima del producto no puede sobrepasar 99999"],
        default: 0
    },
    numCalificaciones: {
        type: Number,
        default: 0
    },
    opiniones: [
        {
            nombreCliente: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true
            },
            comentario: {
                type: String,
                required: true
            },
            fechaComentario: {
                type: Date,
                default: Date.now
            }
        }
    ],
    //relacion con los usuario de 1 a muchos
    user:{
        type: mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },

    fechaCreacion: {
        type: Date,
        default: Date.now
    }
})


//exportar archivo = de tipo mogoose quesea un modelo llamado "productos", que se va alimentar de productosSchema
module.exports= mongoose.model("productos", productosSchema);