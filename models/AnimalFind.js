const Animales = require('./AnimalModel');

exports.find = (req, res) =>{

    Animales.find({})
      .select("-photo")
      .sort('-createdAt')
      .populate('category')
      .exec((err, animales) => {
        if (err) {
          return res.status(400)({
            error: "Animales not found"
          })
        }
        res.json(animales);
      })
      
}

exports.read = (req, res) => {

    req.animales.photo = undefined;
    return res.json(req.animales);

}

exports.photo = (req, res, next ) => {

    if (req.animales.photo.data) {
      res.set('Content-Type', req.animales.photo.contentType)
      return res.send(req.animales.photo.data)
    }
    next();
}

exports.animalesById = (req, res, next, id) => {

  Animales.findById(id)
    .populate("category")
    .exec((err, animales) => {
      if (err || !animales) {
        return res.status(400).json({
          error: "Animales not found"
        });
      }
      req.animales = animales;
      next();
    })
    
}