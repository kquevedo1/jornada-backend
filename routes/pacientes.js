// Rutas para pacientes
const express = require ('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

//api/pacientes para crear, editar y obtener los pacientes.
router.post('/',patientController.CrearPaciente);
router.get('/',patientController.obtenerPacientes);
router.put('/:id',patientController.actualizarPaciente);
router.get('/:id',patientController.obtenerPaciente);
router.delete('/:id',patientController.eliminarPaciente);
module.exports = router;