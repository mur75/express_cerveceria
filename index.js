const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
const app = express();
conectarDB();
app.use(cors());
app.use(express.json());
app.use('/api/productos', require('./routes/productos'));
// app.get('/', (req, res) => {
//     res.send("Hola mundo")
// })

const puerto = process.env.PORT || 4000

app.listen(puerto, () => {
    console.log(`El servidor se está ejecutando en http://localhost:${puerto}`)
})

// regexNumero = /^[0-9]+$/;


