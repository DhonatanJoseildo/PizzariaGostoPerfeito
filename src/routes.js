const express = require('express');
const DashBoardController = require('./controllers/DashBoardController');
const route = express.Router();

const PizzaController = require('./controllers/PizzaController');

route.get('/', DashBoardController.index);
route.post('/registerPizza', PizzaController.save);
route.get('/registerPizza/:id', PizzaController.show);
route.post('/registerPizza/:id', PizzaController.update);
route.post('/registerPizza/delete/:id', PizzaController.delete);
route.get('/registerPizza',(req, res) => res.render('registerPizza'));
module.exports = route;