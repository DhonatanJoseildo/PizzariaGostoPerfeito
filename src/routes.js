const express = require('express');
const PizzaController = require('./controllers/PizzaController');

const routes = express.Router();

routes.get('/', (req, res) => res.render("index"));
routes.post('/index', PizzaController.save);

module.exports = routes;