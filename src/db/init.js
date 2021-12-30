const Database = require('./config')

const initDb = {
  async init(){
    const db = await Database()

    await db.exec(`CREATE TABLE pizzas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      pizza TEXT,
      ingredientes TEXT
    )`);

    await db.run(`INSERT INTO pizzas (
      pizza,
      ingredientes
    )VALUES (
      "Pizza de Atum",
      "Atum, Massa de pizza, Cebola."
    )`);

    await db.run(`INSERT INTO pizzas (
      pizza,
      ingredientes
    )VALUES (
      "Pizza de Frango",
      "Frango desfiado, Massa de pizza, Batata palha."
    )`);
    await db.close()
  }
}

initDb.init()