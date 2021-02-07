const User = require('../models/UsuarioModel');

exports.save = (req, res) => {
    console.log('req.body', req.body); 
    const user = new User(req.body);
    user.save((error, user) => {
      console.log("reached signup endpoint")
      if (error) {
        return res.status(400).json({
          error: "Please check fields, there was an Error"
        })
      }
      user.salt = undefined;
      user.hashed_password = undefined;
      res.json({
        user
      })
    })
}