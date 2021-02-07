const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const User = require('../models/UsuarioModel');


exports.findOne = (req, res) => { 
    // buscar usuario por email
    const {email, password} = req.body
    User.findOne({email}, (error, user) => {
      if (error||!user) {
        return res.status(400).json({
          error: 'User with that email does not exist'
        });
      }
      // validar si esyá o no autenticado
      if (!user.authenticate(password)) {
        return res.status(401).json({
          error: 'Email and password don\'t match'
        });
      }
      const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET)
      // persistencia de token es 't' en cookie con contador de expiración de sesión 
      res.cookie('t', token, {expire: new Date() + 9999})
      // retorna token, user al frontend
      const {_id, name, email, role} = user
      return res.json({token, user: {_id, email, name, role}})
    });
}

exports.findById = (req, res, next, id) => {
    User.findById(id).exec((err,user) => {
      if(err||!user) {
        return res.status(400).json({
          error: "User not found"
        });
      }
      req.profile = user;
      next()
    });
}

// exports.isAdmin = (req, res, next) => {
//   let user = req.profile && req.auth && req.profile._id == req.auth._id
//     if(!user) {
//       return res.status(403).json({
//         error: 'Access denied'
//       });
//     }
//   next();
// }

