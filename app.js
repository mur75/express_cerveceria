const express = require('express');
const cors= require('cors');
const controllers = require('./controllers');

const db =require("./Database");

const app = express();

app.use(cors());
app.use(express.json());

//Rutas

//Get
app.get('/prosucts', controllers.getProductos); 
app.get('/productoCarrito', controllers.getProductoCart);

//Post
app.post("/productosCarrito", controllers.addProductoCart);

//Put
app.put("/productosCarrito/:productId", controllers.putProduct);

//Delete
app.delete("/productosCarrito/:productId", controllers.deleteProduct);
    

app.listen(4000, () => {
    console.log("El servidor esta arriba");
    db();
});

module.exports = app;

//pepes