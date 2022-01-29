const Bebida = require('../model/Bebida');

module.exports = {
  async save(req, res){
    await Bebida.create(
      {
        bebida: req.body["name-bebida"],
        amount: req.body["name-valor"]
      }
    );
    return res.redirect('/')
  },

  async show(req, res){
    const bebidas = await Bebida.get()
    const bebidaId = req.params.id

    const bebida = bebidas.find(bebida => Number(bebida.id) === Number(bebidaId))

    if (!bebida) {
      return res.send('BEBIDA NOT FOUND')
    }

    return res.render("bebidaEdit", {bebida})
  },

  async update(req, res){
    const bebidaId = req.params.id

    const updateBebida = {
      bebida: req.body["name-bebida"],
      amount: req.body["name-valor"]
    }
    await Bebida.update(updateBebida, bebidaId);
    res.redirect('/')
  },
  async delete(req, res){
    const bebidaId = req.params.id

    await Bebida.delete(bebidaId)
    return res.redirect('/')
  }
}