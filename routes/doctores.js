// Rutas para doctores
const express = require ('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

//api/doctores para crear, editar y obtener los doctores.
router.post('/',doctorController.CrearDoctor);
router.get('/',doctorController.obtenerDoctores);
router.put('/:id',doctorController.actualizarDoctor);
router.get('/:id',doctorController.obtenerDoctor);
router.delete('/:id',doctorController.eliminarDoctor);
module.exports = router;