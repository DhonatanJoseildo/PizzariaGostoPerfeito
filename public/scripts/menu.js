const button = document.querySelector('.actionsButton .addOrder')
const cards = document.querySelectorAll('.cards .card')

for (let card of cards) {
  const cardId = card.dataset.id
  
  const addPedido = card.querySelector('button.addOrder')
  
  addPedido.addEventListener('click',() => {
    if (addPedido.textContent === 'Carrinho') {
      addPedido.innerHTML = 'Remover'
      
    }else{
      addPedido.innerHTML = 'Carrinho'
    }

    
  })
}