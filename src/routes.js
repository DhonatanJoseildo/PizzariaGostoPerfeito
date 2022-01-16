const express = require('express');
const res = require('express/lib/response');
const DashBoardController = require('./controllers/DashBoardController');
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
route.post('/home/login', ProfileController.enter);
route.get('/home/registerProfile', (req, res) => res.render('registerProfile',{message:''}));
route.post('/home/registerProfile', ProfileController.save);

route.get('/home/menu', (req, res) => res.render('menu'));
route.get('/home/promotions', (req, res) => res.render('promotions'))
route.get('/home/delivery', (req, res) => res.render('delivery'))

module.exports = route;