const mongoose = require('mongoose');
const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    describcion: {
        type: String,
        required: true
    },
    estilo: {
        type: String,
        required: true
    },
    casacervezera: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    gradoalcohol: {
        type: Number,
        required: true
    },
    paisorigen: {
        type: String,
        required: true
    },
    presentacion: {
        type: String,
        required: true
    },
    ibu: {
        type: Number,
        required: true
    },
    disponibilidad: {
        type: Boolean,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
});
module.exports = mongoose.model('producto', ProductoSchema);