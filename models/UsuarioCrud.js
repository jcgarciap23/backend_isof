const { save } = require('./UsuarioSave');
const { findOne, findById } = require('./UsuarioFind');

class UsuarioCrud{

    usuarioSignin(req, res){
        findOne(req, res);
    }

    usuarioById(req, res, next, id){
        findById(req, res, next, id);
    }
    
    usuarioSignup(req, res){
        save(req, res);
    }

}

module.exports = new UsuarioCrud;