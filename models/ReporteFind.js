const Reportes = require('./ReporteModel');

exports.find = (req, res) => {

    Reportes.find()
      .select("-photo")
      .sort('-createdAt')
      .populate('category')
      .exec((err, reportes) => {
        if (err) {
          return res.status(400).json({
            error: "Reportes not found"
          })
        }
        res.json(reportes);
      })

}
  
exports.read = (req, res) => {

    req.reportes.photo = undefined;
    return res.json(req.reportes);

}

exports.reportesById = (req, res, next, id) => {

    Reportes.findById(id)
      .populate("category")
      .exec((err, reportes) => {
        if (err || !reportes) {
          return res.status(400).json({
            error: "Animales not found"
          });
        }
        req.reportes = reportes;
        next();
      })

}
  
exports.photo = (req, res, next ) => {

    if (req.reportes.photo.data) {
      res.set('Content-Type', req.reportes.photo.contentType)
      return res.send(req.reportes.photo.data)
    }
    next();
    
}