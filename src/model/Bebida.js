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
  }
}