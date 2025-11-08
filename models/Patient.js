const mongoose = require('mongoose');

const PatientSchema = mongoose.Schema({
    nombrepaciente: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    especialidadpaciente: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    profesion: {
        type: String,
        required: true
    },
    religion: {
        type: String,
        required: true
    },
    escolaridad: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    duenotelefono: {
        type: String,
        required: true
    },
    mediocontacto: {
        type: String,
        required: true
    },
    etnia: {
        type: String,
        required: true
    },
    ambientecasa: {
        type: [String],
        required: true
    },
    piso: {
        type: String,
        required: true
    },
    pared: {
        type: String,
        required: true
    },
    techo: {
        type: String,
        required: true
    },
    sanitario: {
        type: String,
        required: true
    },
    agua: {
        type: String,
        required: true
    },
    basura: {
        type: String,
        required: true
    },
    dispocionexcretas: {
        type: String,
        required: true
    },
    estadopaciente: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Patient', PatientSchema);