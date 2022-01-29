import Modal from './modal.js';

const modal = Modal()

const cardsPizza = document.querySelectorAll('.cards .card')
const cardsBebida = document.querySelectorAll('.cards.bebidas .card.bebida')
const deleteForm = document.querySelector('#delete-pizza')

const titleDelete = document.querySelector('.titleDelete')
const pDelete = document.querySelector('.pDelete')
const deletePizza = document.querySelector('.deletePizza')

for (let card of cardsPizza) {
  const cardId = card.dataset.id

  const buttonDeletePizza = card.querySelector('button.delete')
  buttonDeletePizza.onclick = () => {
    modal.openModal()

    deleteForm.setAttribute('action', '/registerPizza/delete/' + cardId)
  }
}
for (let card of cardsBebida){
  const cardId = card.dataset.id

  const buttonDeleteBebida = card.querySelector('button.delete')
  buttonDeleteBebida.onclick = () => {
    modal.openModal()
    
    titleDelete.innerHTML = 'Bebida'
    pDelete.innerHTML = 'Quer mesmo excluir essa bebida?'
    deletePizza.innerHTML = 'Excluir Bebida'
    deleteForm.setAttribute('action', '/bebida/delete/' + cardId)
  }
}