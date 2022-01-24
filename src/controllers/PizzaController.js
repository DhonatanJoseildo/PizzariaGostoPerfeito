const Pizza = require('../model/Pizza')

module.exports = {
  async save(req, res) {
    await Pizza.create(
      {
        pizza: req.body["name-pizza"],
        ingredientes: req.body["name-ingredientes"],
        amount: req.body["name-valor"]
      }
    );

    return res.redirect('/')
  },

  async show(req, res){
    const pizzas = await Pizza.get()
    const pizzaId = req.params.id

    const pizza = pizzas.find(pizza => Number(pizza.id) === Number(pizzaId))

    if (!pizza) {
      return res.send('Pizza NOT FOUND')
    }

    return res.render("pizzaEdit", {pizza})
  },
  
  async update(req, res){
    const pizzaId = req.params.id
    
    const updatePizza = {
      pizza: req.body["name-pizza"],
      ingredientes: req.body["name-ingredientes"],
      amount: req.body["name-valor"]
    }
    await Pizza.update(updatePizza, pizzaId)
    res.redirect('/')
  },

  async delete(req, res){
    const pizzaId = req.params.id

    await Pizza.delete(pizzaId)

    return res.redirect('/')
  }
}