const express = require('express');
const router = express.Router();

const { list, read, create, remove, reportesById, photo } = require('../controllers/ReporteController');

// list 
router.get('/reportes', list);
router.post('/create', create)
router.get('/photo/:reportesId', photo)
router.get('/:reportesId', read)
router.delete('/:reportesId', remove)

router.param("reportesId", reportesById);

module.exports = router;