const express = require('express');
const route = express.Router();

const PizzaController = require('./controllers/PizzaController');

route.get('/', PizzaController.show);
route.post('/index', PizzaController.save);
route.get('/registerPizza',(req, res) => res.render('registerPizza'));
module.exports = route;