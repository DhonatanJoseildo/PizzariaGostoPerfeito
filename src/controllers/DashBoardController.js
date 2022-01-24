const Pizza = require('../model/Pizza')
const Bebida = require('../model/Bebida')

module.exports = {

  async index(req, res){
    const pizzas = await Pizza.get();
    const bebidas = await Bebida.get();

    return res.render("index", {pizzas: pizzas, bebidas: bebidas})
  }
}