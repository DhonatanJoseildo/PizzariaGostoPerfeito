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
      ingredientes: pizza.ingredientes,
      amount: pizza.amount
    }));
    
  },

  async create(newPizza){
    const db = await Database()

    await db.run(`INSERT INTO pizzas (
      pizza,
      ingredientes,
      amount
    )VALUES (
      "${newPizza.pizza}",
      "${newPizza.ingredientes}",
      "${newPizza.amount}"
    )`)

    await db.close()
  },

  async update(updatePizza, pizzaId){
    const db= await Database()

    await db.run(`UPDATE pizzas SET
      pizza = "${updatePizza.pizza}",
      ingredientes = "${updatePizza.ingredientes}",
      amount = "${updatePizza.amount}"
      WHERE id = ${pizzaId}
    `)
    await db.close()
  },
  
  async delete(id){
    // abrindo o banco de dados
    const db = await Database()
    // apagar um campo/ pizza da tabela pizzas
    await db.run(`DELETE FROM pizzas WHERE id = ${id}`)

    await db.close()
  }
}