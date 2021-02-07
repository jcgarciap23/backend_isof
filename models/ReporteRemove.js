const Reportes = require('./ReporteModel');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.remove = (req, res) => {

    let reportes = req.reportes
    reportes.remove((err, deletedReportes) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        })
      }
      res.json({
        message: "Reporte fue eliminado correctamente"
      })
    })
    
}