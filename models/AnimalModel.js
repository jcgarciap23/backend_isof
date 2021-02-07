const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema(
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
      maxlength: 4000
    },
    edad: {
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
    raza: {
      type: String,
      trim: true, 
      requrie: true,
      maxlength: 32,
    },
    photo: {
      data: Buffer,
      contentType: String
    },
    sexo: {
      type: String,
      trim: true,
      require: true,
      maxlength: 32,
    },
    estadoVacunas: {
      type: String,
      trim: true,
      require: true,
      maxlength: 32,
    },
    estadoDespa: {
      type: String,
      trim: true,
      require: true,
      maxlength: 32,
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
    contacto: {
      type: String,
      trim: true, 
      requrie: true,
      maxlength: 32,
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model("Animales", animalSchema);