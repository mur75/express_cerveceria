// Create //

const Productos = require("../models/Productos");
exports.crearProducto = async(req, res) => {
    // console.log('creando producto desde el controlador')
    console.log(req.body)
    try {
        let productos;
        productos = new Productos(req.body);
        await productos.save();
        res.send(productos);
    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... hubo un error')
    }
}

// Read //

exports.obtenerProducto = async(req, res) => {
    try {
        const Productos = require("../models/Productos");
        const productos = await Productos.find();
        res.json(productos)
    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... hubo un error')
    }
}

exports.obtenerProductoPorCategoria = async(req, res) => {
    try {
        const Productos = require("../models/Productos");
        const productos = await Productos.find({ categoria: req.params.categoria });
        res.json(productos)
    } catch (error) {
        console.log(error)
        res.status(500).send('Ups... hubo un error')
    }
}


exports.obtenerProductoEspecifico = async(req, res) => {
    try {
        const Productos = require("../models/Productos");
        let producto_especifico = await Productos.findById(req.params.id);
        if (!producto_especifico) {
            res.status(404).json({ msg: "El producto solicitado no existe" })
        }
        res.json(producto_especifico)
    } catch (error) {
        console.log(error)
        res.status(500).send('Existe un problema.... comuniquese con el administrador')
    }
}

// Update //

exports.actualizarProducto = async(req, res) => {
    const Productos = require("../models/Productos");
    const { nombre, precio, describcion, estilo, casacervezera, color, gradoalcohol, paisorigen, presentacion, ibu, disponibilidad, categoria, orden } = req.body
    let producto = await Productos.findById(req.params.id)
    if (!producto) {
        res.status(404).json({ msg: 'No existe el producto especificado' })
    }
    producto.nombre = nombre
    producto.precio = precio
    producto.describcion = describcion
    producto.estilo = estilo
    producto.casacervezera = casacervezera
    producto.color = color
    producto.gradoalcohol = gradoalcohol
    producto.paisorigen = paisorigen
    producto.presentacion = presentacion
    producto.ibu = ibu
    producto.disponibilidad = disponibilidad
    producto.categoria = categoria
    producto.orden = orden
    producto = await Productos.findOneAndUpdate({ _id: req.params.id }, producto, { new: true })
    res.json(producto)
}

// Delete //

exports.borrarProducto = async(req, res) => {
    try {
        const Productos = require("../models/Productos");
        let producto = await Productos.findById(req.params.id)
        if (!producto) {
            res.status(404).json({ msg: 'No existe el producto especificado' })
        }
        await Productos.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: "El producto se elimino correctamente" })
    } catch (error) {
        console.log(error)
        res.status(500).send('Existe un problema.... comuniquese con el administrador')
    }
}