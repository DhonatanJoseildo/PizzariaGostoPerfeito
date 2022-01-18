const express = require('express');
const DashBoardController = require('./controllers/DashBoardController');
const FrontController = require('./controllers/FrontController');
const route = express.Router();

const PizzaController = require('./controllers/PizzaController');
const ProfileController = require('./controllers/ProfileController');

route.get('/', DashBoardController.index);
route.post('/registerPizza', PizzaController.save);
route.get('/registerPizza/:id', PizzaController.show);
route.post('/registerPizza/:id', PizzaController.update);
route.post('/registerPizza/delete/:id', PizzaController.delete);
route.get('/registerPizza',(req, res) => res.render('registerPizza'));

route.get('/home', (req, res) => res.render('home',profile = ""));
route.get('/home/registerProfile', (req, res) => res.render('registerProfile',{message:''}));
route.get('/home/menu', FrontController.index);
route.get('/home/promotions', (req, res) => res.render('promotions'))
route.get('/home/delivery', (req, res) => res.render('delivery'))

route.post('/home', ProfileController.enter);
route.post('/home/registerProfile', ProfileController.save);

module.exports = route;