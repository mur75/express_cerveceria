const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');
// router.post('/', () => {
//     console.log('Creando producto...')
// })
router.post('/', productosController.crearProducto);
router.get('/', productosController.obtenerProducto);
router.get('/categoria/:categoria', productosController.obtenerProductoPorCategoria);
router.get('/', productosController.obtenerProductoEspecifico);
router.put('/', productosController.actualizarProducto);
router.delete('/', productosController.borrarProducto);
module.exports = router;