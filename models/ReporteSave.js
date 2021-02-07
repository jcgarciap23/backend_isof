const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const Reportes = require('./ReporteModel');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.save = (req, res) => {

    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(400).json({
          error: "Image could not be uploaded"
        })
      }
  
      const { nombre, descripcion, contacto, categoria, nombreUsuario, idUsuario } = fields
      let reportes = new Reportes(fields);
  
      if (files.photo) {
        if (files.photo.size > 2000000) {
          return res.status(400).json({
            error: "Image should be lass than 2MB in size"
          })
        }
        reportes.photo.data = fs.readFileSync(files.photo.path)
        reportes.photo.contentType = files.photo.type
      }
  
      reportes.save((err, result) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(error)
          })
        }
        res.json(result);
      })
  
    })

}