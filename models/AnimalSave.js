const Animales = require('./AnimalModel');
const { errorHandler } = require('../helpers/dberrorHandler');
const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');

exports.save = (req, res) =>{

    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err) {
        return res.status(400).json({
            error: "Image could not be uploaded"
        })
        }

        const { nombre, descripcion, edad, categoria, raza, sexo, estadoVacunas, estadoDespa, nombreUsuario, idUsuario, contacto } = fields
        let animales = new Animales(fields);

        if (files.photo) {
        if (files.photo.size > 2000000) {
            return res.status(400).json({
            error: "Image should be lass than 2MB in size"
            })
        }
        animales.photo.data = fs.readFileSync(files.photo.path)
        animales.photo.contentType = files.photo.type
        }

        animales.save((err, result) => {
            if (err) {
            return res.status(400).json({
                error: errorHandler(error)
            })
            }
            res.json(result);
        })

    })
}