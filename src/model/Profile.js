const Database = require('../db/config');

module.exports = {

  async create(newProfile){
    const db = await Database()

    await db.run(`INSERT INTO profiles(
      email,
      password,
      endereco,
      numberEndereco
    ) VALUES (
      "${newProfile.email}",
      "${newProfile.password}",
      "${newProfile.endereco}",
      "${newProfile.numberEndereco}"
    )`)

    await db.close()
  },
  async get(){
    const db = await Database()

    const profiles = await db.all(`SELECT * FROM profiles`)
    await db.close()

    return profiles.map((profile) => ({
      id: profile.id,
      email: profile.email,
      password: profile.password,
      endereco: profile.endereco,
      numberEndereco: profile.numberEndereco
    }));
  }
}