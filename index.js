const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

//creamos el servidor
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

// importar rutas
const authRoutes = require('./routes/auth');
const usuarioRoutes = require('./routes/usuarios');
const doctorRoutes = require('./routes/doctores');
const pacienteRoutes = require('./routes/pacientes');

// usarlas
app.use('/api/auth', authRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/doctores', doctorRoutes);
app.use('/api/pacientes', pacienteRoutes);

//conectamos a la base de datos
conectarDB();

app.listen(4000, () => {
    console.log('El servidor está corriendo en el puerto 4000 🚀')
});
