const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true
    },
    tipopermiso: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    },
    estadousuario: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('User', UserSchema);