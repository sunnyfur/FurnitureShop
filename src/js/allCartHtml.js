const cart = require('./cart');
const dom = require("./createElementDom");


//TODO заменить тестовые классы .card-product__description, ... на новые после верстки
// сверстать новую карточку

const AddBtn = (element, cartObj) => {
    try {
        cart.AddToCart(cartObj.Id);
    } catch (err) {
        // alert(err.message);
        element.closest(".card-product").querySelector(".card_valid").innerText = err.message;
    }

    element.closest(".card-product").querySelector(".card-product__description").innerText = cartObj.Count;

}

const DeleteBtn = (element, cartObj) => {
    cart.DeleteProduct(cartObj.Id);
    element.closest(".card-product").querySelector(".card-product__description").innerText = cartObj.Count;
    element.closest(".card-product").querySelector(".card_valid").innerText = "";
}

const DeleteFromCart = (element, cartObj) => {

    cart.DeleteFromCart(cartObj.Id);
    element.closest(".card-product").remove();
}


const GenerateCard = (cartProduct) => {

    // const cartObj = new cart.CartProduct;
    // cartObj.ApplyData(cartProduct);
    const product = cartProduct.GetProduct();
    // console.log(product);
    const div = dom.createElemDOM("div", "card-product");
    div.id = product.Id;
    div.appendChild(dom.createElemDOM("p", "", product.Name));
    div.appendChild(dom.createElemDOM("p", "card-product__description", cartProduct.Count));
    div.appendChild(dom.createElemDOM("p", "card_valid"));
    const addButt = div.appendChild(dom.createElemDOM("input"));
    addButt.type = "button";
    addButt.value = "+";
    addButt.addEventListener("click", (e) => AddBtn(e.target, cartProduct));
    const delButt = div.appendChild(dom.createElemDOM("input", "", "-"));
    delButt.type = "button";
    delButt.value = "-";
    delButt.addEventListener("click", (e) => DeleteBtn(e.target, cartProduct));

    const delProduct = div.appendChild(dom.createElemDOM("input", "", "Удалить"));
    delProduct.addEventListener("click", (e) => DeleteFromCart(e.target, cartProduct));


    return div;

}

// const CheckCart = (e) => {
//     e.preventDefault();
//     [...cart.listCart].forEach(cartPr => {

//         const checked = cartPr.CheckCount;
//         if (checked<) {
//             let mssg = "Available: " + ;

//             document.querySelector("#" + cartPr.Id).querySelector(".card_valid")
//         }

//     })





// }

document.addEventListener("DOMContentLoaded", () => {

    [...cart.listCart].forEach(cartProduct => document.querySelector('.container_products').appendChild(GenerateCard(cartProduct)));

    // если корзина не пустая, то добавить кнопку
    // document.querySelector("#idCart").addEventListener("submit", (e) => CheckCart(e));


})