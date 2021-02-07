const Animales = require('./AnimalModel');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.remove = (req, res) => {
    let animales = req.animales
    animales.remove((err, deletedAnimales) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        })
      }
      res.json({
        message: "Animal fue eliminado correctamente"
      })
    })
}
  
  
  