const mongoose = require('mongoose');

const DoctorSchema = mongoose.Schema({
    nombredoctor: {
        type: String,
        required: true
    },
    especialidad: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Doctor', DoctorSchema);