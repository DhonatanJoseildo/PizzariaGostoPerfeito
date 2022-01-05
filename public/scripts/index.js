import Modal from './modal.js';

const modal = Modal()

const cards = document.querySelectorAll('.cards .card')
const deleteForm = document.querySelector('#delete-pizza')

for (let card of cards) {
  const cardId = card.dataset.id

  const deleteButton = card.querySelector('button.delete')
  deleteButton.onclick = () => {
    modal.openModal()
    deleteForm.setAttribute('action', '/registerPizza/delete/' + cardId)
  }
}