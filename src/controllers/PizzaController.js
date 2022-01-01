const Pizza = require('../model/Pizza')

module.exports = {
  async save(req, res) {
    await Pizza.create(
      {
        pizza: req.body["name-pizza"],
        ingredientes: req.body["name-ingredientes"]
      }
    );

    return res.redirect('/')
  },

  async show(req, res){
    const pizzas01 = await Pizza.get()
    
    return res.render("index", {pizzas: pizzas01})
  }
  
}