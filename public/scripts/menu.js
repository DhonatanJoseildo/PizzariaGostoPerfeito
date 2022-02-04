const button = document.querySelector('.actionsButton .addOrder')
const cards = document.querySelectorAll('.cards .card')

for (let card of cards) {
  const cardId = card.dataset.id

  const addPedido = card.querySelector('button.addOrder')
  const imgButton = card.querySelector('button.addOrder img')

  const idPedido = card.querySelector('.cardId')
  const namePedido = card.querySelector('.cardName')
  const amountPedido = card.querySelector('.cardAmount .amount')

  addPedido.addEventListener('click', () => {
    if (
      addPedido.classList.contains('cart') &&
      card.classList.contains('bebida')
    ) {
      imgButton.src = '/images/delete-pizza.svg'
      const pedido = {
        id: idPedido.textContent,
        typeProduct: 'Bebida',
        name: namePedido.textContent,
        amount: amountPedido.textContent
      }
      sessionStorage.setItem('carts', JSON.stringify(pedido))
      addPedido.classList.remove('cart')
    } else if (
      addPedido.classList.contains('cart') &&
      card.classList.contains('bebida') == false
    ) {
      imgButton.src = '/images/delete-pizza.svg'
      const pedido = {
        id: idPedido.textContent,
        typeProduct: 'Pizza',
        name: namePedido.textContent,
        amount: amountPedido.textContent
      }
      sessionStorage.setItem('carts', JSON.stringify(pedido))
      addPedido.classList.remove('cart')
    } else {
      imgButton.src = '/images/cart.svg'
      sessionStorage.removeItem('carts')
      addPedido.classList.add('cart')
    }
  })
}

const cart = document.querySelector('.buttonCart .openCart')
const modalCart = document.querySelector('.bgModal')

const nameProduct = document.querySelector('.pedido .product')
const amountProduct = document.querySelector('.pedido .amount')
const typeProd = document.querySelector('.pedido .typeProd')

function openCart() {
  const dados = JSON.parse(sessionStorage.getItem('carts'))
  modalCart.style.display = 'flex'
  if (dados != null) {
    nameProduct.innerHTML = dados.name
    amountProduct.innerHTML = dados.amount
    typeProd.innerHTML = dados.typeProduct
  }
}

function closeCart() {
  modalCart.style.display = 'none'
}
