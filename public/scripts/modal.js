const modal = document.querySelector('.bgPizza')
const btCancelar = document.querySelector('.btCancelar')

btCancelar.addEventListener('click', closeModal)
function openModal() {

  modal.classList.add('active')
}

function closeModal(e) {
  e.preventDefault()
  modal.classList.remove('active')
}
