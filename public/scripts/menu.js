const dataLocal = sessionStorage.getItem('pedidos')
const button = document.querySelector('.actionsButton .addOrder')
const cards = document.querySelectorAll('.cards .card')

for (let card of cards) {
  const cardId = card.dataset.id
  
  const addPedido = card.querySelector('button.addOrder')
  
  addPedido.addEventListener('click',() => {
    console.log(addPedido)
    console.log(cardId)
    if (addPedido.textContent === 'Carrinho') {
      addPedido.innerHTML = 'Delete'
      
    }else{
      addPedido.innerHTML = 'Carrinho'
    }

    sessionStorage.setItem('pedidos', addPedido.textContent);
    console.log(sessionStorage.pedidos)
    
  })
  addPedido.innerHTML = sessionStorage.getItem('pedidos')
}