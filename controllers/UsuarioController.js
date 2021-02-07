const expressJwt = require('express-jwt');
const UsuarioCrud = require ('../models/UsuarioCrud');

exports.signup = (req, res) => {

  UsuarioCrud.usuarioSignup(req,res);

}

exports.signin = (req, res) => { 
  
  UsuarioCrud.usuarioSignin(req,res);

}

exports.signout = (req, res) => { 

  res.clearCookie('t')
  res.json({message: "Signout success"});
  
}

exports.userById = (req, res, next, id) => {

  UsuarioCrud.usuarioById(req, res, next, id);

}



