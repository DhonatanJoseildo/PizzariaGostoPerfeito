const Database = require('../db/config');

module.exports = {
  async get(){
    const db = await Database();

    const bebidas = await db.all(`SELECT * FROM bebidas`);

    await db.close()

    return bebidas.map((bebida) => ({
      id: bebida.id,
      name: bebida.bebida,
      amount: bebida.amount
    }));
  },
  async create(newBebidas){
    const db = await Database();

    await db.run(`INSERT INTO bebidas(
      bebida,
      amount
    )VALUES (
      "${newBebidas.bebida}",
      "${newBebidas.amount}"
    )`);
  },
  async update(updateBebida, bebidaId){
    const db = await Database();

    await db.run(`UPDATE bebidas SET
      bebida = "${updateBebida.bebida}",
      amount = "${updateBebida.amount}"
      WHERE id = ${bebidaId}
    `)
    await db.close();
  },
  async delete(id){
    // abrindo o banco de dados
    const db = await Database();
    // apagar um campo/ pizza da tabela pizzas
    await db.run(`DELETE FROM bebidas WHERE id = ${id}`)

    await db.close();
  }
}