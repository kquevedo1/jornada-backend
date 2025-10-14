// Rutas para usuarios
const express = require ('express');
const router = express.Router();
const userController = require('../controllers/userController');

//api/doctores para crear, editar y obtener los doctores.
router.post('/',userController.CrearUsuario);
router.get('/',userController.obtenerUsuarios);
router.put('/:id',userController.actualizarUsuario);
router.get('/:id',userController.obtenerUsuario);
router.delete('/:id',userController.eliminarUsuario);
module.exports = router;