const Database = require('../db/config');

module.exports = {
  async get(){
    const db = await Database();

    // pegar todos as pizzas
    const pizzas = await db.all(`SELECT * FROM pizzas`);

    await db.close();

    return pizzas.map((pizza) => ({
      id: pizza.id,
      name: pizza.pizza,
      ingredientes: pizza.ingredientes
    }));
    
  },

  async create(newPizza){
    const db = await Database()

    await db.run(`INSERT INTO pizzas (
      pizza,
      ingredientes
    )VALUES (
      "${newPizza.pizza}",
      "${newPizza.ingredientes}"
    )`)

    await db.close()
  }
}