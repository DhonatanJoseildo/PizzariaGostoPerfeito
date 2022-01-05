const Pizza = require('../model/Pizza')

module.exports = {

  async index(req, res){
    const pizzas = await Pizza.get();

    return res.render("index", {pizzas: pizzas})
  }
}