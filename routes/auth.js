// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // tu modelo de usuario
// const bcrypt = require('bcryptjs'); // si usas encriptación

// POST: Login
router.post('/login', async (req, res) => {
    try {
        const { usuario, contrasena } = req.body;

        // buscar usuario
        const user = await User.findOne({ usuario });
        if (!user) return res.status(400).json({ msg: 'Usuario no encontrado' });

        // verificar contraseña
        const isMatch = contrasena === user.contrasena; 
        // si usas bcrypt: const isMatch = await bcrypt.compare(contrasena, user.contrasena);

        if (!isMatch) return res.status(400).json({ msg: 'Contraseña incorrecta' });

        // devolver datos relevantes
        res.json({
            usuario: user.usuario,
            rol: user.tipopermiso, 
            estado: user.estadousuario
        });

    } catch (err) {
        res.status(500).json({ msg: 'Error en el servidor' });
    }
});

module.exports = router;
