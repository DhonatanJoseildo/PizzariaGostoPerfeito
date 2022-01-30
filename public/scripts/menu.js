const button = document.querySelector('.actionsButton .addOrder')
const cards = document.querySelectorAll('.cards .card')

for (let card of cards) {
  const cardId = card.dataset.id
  
  const addPedido = card.querySelector('button.addOrder')
  const imgButton = card.querySelector('button.addOrder img')

  addPedido.addEventListener('click',() => {
    
    if (addPedido.classList.contains('cart')) {
      imgButton.src = '/images/delete-pizza.svg'
      addPedido.classList.remove('cart')
    }else{
      imgButton.src = '/images/cart.svg'
      addPedido.classList.add('cart')
    }
  })
}