const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const dotenv = require("dotenv");
dotenv.config();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Configuración Base de Datos
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => { console.log("Base de datos conectada")});

// Rutas de backend
app.use('/api/animales', require('./routes/animales'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/reportes', require('./routes/reportes'));

// Escuchar puerto
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Servidor de +COTAS está ejecutando en el puerto ${port}`);
})