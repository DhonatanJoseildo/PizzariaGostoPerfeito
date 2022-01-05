const Database = require('./config')

const initDb = {
  async init(){
    const db = await Database()

    await db.exec(`CREATE TABLE pizzas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      pizza TEXT,
      ingredientes TEXT,
      amount NUMBER
    )`);

    await db.run(`INSERT INTO pizzas (
      pizza,
      ingredientes,
      amount
    )VALUES (
      "Pizza de Atum",
      "Atum, Massa de pizza, Cebola.",
      60.00
    )`);

    await db.run(`INSERT INTO pizzas (
      pizza,
      ingredientes,
      amount
    )VALUES (
      "Pizza de Frango",
      "Frango desfiado, Massa de pizza, Batata palha.",
      45.00
    )`);
    await db.close()
  }
}

initDb.init()