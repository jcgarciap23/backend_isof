const { find, read, photo, animalesById } = require('./AnimalFind');
const { save } = require('./AnimalSave');
const { remove } = require('./AnimalRemove');

class AnimalCrud{

    animalFind(req, res){
        find(req, res);
    }

    animalFindRead(req, res){
        read(req, res);
    }

    animalFindPhoto(req, res, next){
        photo(req, res, next);
    }

    animalFindById(req, res, next, id){
        animalesById(req, res, next, id);
    }
    
    animalSave(req, res){
        save(req, res);
    }

    animalRemove(req, res){
        remove(req, res);
    }
    
}

module.exports = new AnimalCrud;








