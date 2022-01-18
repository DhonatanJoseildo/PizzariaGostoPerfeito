const Profile = require('../model/Profile');
const Pizza = require('../model/Pizza');

module.exports = {
  async index(req, res){
    const pizzas = await Pizza.get();

    res.render('menu',{pizzas: pizzas})
  }
}