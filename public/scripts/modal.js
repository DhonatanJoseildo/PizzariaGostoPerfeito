export default function Modal() {
  const modal = document.querySelector('.bgModal')
  const cancelButton = document.querySelector('button.cancelDelete')

  cancelButton.addEventListener('click', closeModal)

  function openModal() {
    document.addEventListener('keydown', closeOnEscape)
    modal.classList.add('active')
  }

  function closeModal() {
    document.removeEventListener('keydown', closeOnEscape)
    modal.classList.remove('active')
  }
  function closeOnEscape({ key }) {
    if (key == 'Escape') {
      closeModal()
    }
  }

  return {
    openModal,
    closeModal
  }
}
