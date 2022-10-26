const {model, schema, Schema}=require("mongoose");

const productosSchema = new Schema({
    producto : {type: String, required: true, unique: true},
    imagen : {type: String, required: true},
    precio : {type: Number, required: true},
    cantidadCarrito: {type: Number, required: true},
    cantidad: {type: Number, required: true},
    total: {type: Number, required: true},
    enCarrito : {type: Boolean, default: false}
});

module.exports = model("productosCarrito", productosSchema );