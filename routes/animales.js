const express = require('express');
const router = express.Router();
const {userById} = require('../controllers/UsuarioController');

const { list, read, create, remove, animalesById, photo } = require('../controllers/AnimalController');

// list 
router.get('/animales', list);
router.post('/create/:userId', create)
router.get('/photo/:animalesId', photo)
router.get('/:animalesId', read)
router.delete('/:animalesId', remove)

router.param("animalesId", animalesById);
router.param('userId', userById);

module.exports = router;