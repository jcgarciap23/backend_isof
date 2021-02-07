const { find, read, photo, reportesById } = require('./ReporteFind');
const { save } = require('./ReporteSave');
const { remove } = require('./ReporteRemove');

class ReporteCrud{

    reporteFind(req, res){
        find(req, res);
    }

    reporteFindRead(req, res){
        read(req, res);
    }

    reporteFindPhoto(req, res, next){
        photo(req, res, next);
    }

    reporteFindById(req, res, next, id){
        reportesById(req, res, next, id);
    }
    
    reporteSave(req, res){
        save(req, res);
    }

    reporteRemove(req, res){
        remove(req, res);
    }
    
}

module.exports = new ReporteCrud;