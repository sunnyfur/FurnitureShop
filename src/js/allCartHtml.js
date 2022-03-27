const cart = require('./cart');


const GenerateCard = (cartProduct) => {
    const product = cartProduct.GetProduct();



}


document.addEventListener("DOMContentLoaded", () => {
    [...cart.listCart].forEach(cartProduct => document.querySelector('#container_cart').appendChild(GenerateCard(Cartproduct)));
})