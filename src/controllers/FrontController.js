const Profile = require('../model/Profile');
const Pizza = require('../model/Pizza');
const Bebida = require('../model/Bebida');

module.exports = {
  async index(req, res){
    const pizzas = await Pizza.get();
    const bebidas = await Bebida.get();

    res.render('menu',{pizzas: pizzas, bebidas: bebidas})
  },
  async promotion(req, res){
    const pizzas = await Pizza.get();

    res.render('promotions',{pizzas: pizzas})
  }
}