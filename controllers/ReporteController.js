const ReporteCrud = require ('../models/ReporteCrud');

exports.list = (req, res) => {

  ReporteCrud.reporteFind(req, res);

}

exports.read = (req, res) => {
  
  ReporteCrud.reporteFindRead(req, res);

}

exports.photo = (req, res, next ) => {

  ReporteCrud.reporteFindPhoto(req, res, next);

}

exports.reportesById = (req, res, next, id) => {
  
  ReporteCrud.reporteFindById(req, res, next, id);

}

exports.create = (req, res) => {

  ReporteCrud.reporteSave(req, res);

}

exports.remove = (req, res) => {
  
  ReporteCrud.reporteRemove(req, res);

}
