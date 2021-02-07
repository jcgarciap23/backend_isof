const mongoose = require('mongoose');

const reportesSchema = new mongoose.Schema(
  {
    nombre: {
        type: String,
        trim: true, 
        require: true,
        maxlength: 32,
    },
    descripcion: {
        type: String,
        trim: true,
        require: true,
        maxlength: 2000
    },
    contacto: {
        type: String,
        trim: true,
        require: true,
        maxlength: 32,
    },
    categoria: {
        type: String,
        trim: true,
        require: true,
        maxlength: 32,
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    nombreUsuario: {
        type: String,
        trim: true, 
        requrie: true,
        maxlength: 32,
    },
    idUsuario: {
        type: String,
        trim: true, 
        requrie: true,
        maxlength: 32,
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model("Reportes", reportesSchema);