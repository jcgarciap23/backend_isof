const AnimalCrud = require ('../models/AnimalCrud');

exports.list = (req, res) => {

  AnimalCrud.animalFind(req, res);

}

exports.read = (req, res) => {
  
  AnimalCrud.animalFindRead(req, res);

}

exports.photo = (req, res, next ) => {

  AnimalCrud.animalFindPhoto(req, res, next);

}

exports.animalesById = (req, res, next, id) => {
  
  AnimalCrud.animalFindById(req, res, next, id);

}

exports.create = (req, res) => {

  AnimalCrud.animalSave(req, res);

}

exports.remove = (req, res) => {
  
  AnimalCrud.animalRemove(req, res);

}



