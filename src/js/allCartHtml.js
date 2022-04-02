const cart = require('./cart');
const dom = require("./createElementDom");
const drawCount = require('./cartCount');

const AddBtn = (element, cartObj) => {
    try {
        cart.AddToCart(cartObj.Id);
    } catch (err) {
        element.closest(".card-product_cart").querySelector(".card_valid").innerText = err.message;
    }
    const card = element.closest(".card-product_cart");
    card.querySelector(".card-product__count").innerText = cartObj.Count;
    card.querySelector(".price_main").innerText = cartObj.GetPriceCount();
    card.querySelector(".price_old").innerText = cartObj.GetOldPriceCount();

    drawCount.DrawCartCount();
    refreshPrice();
    checkCart();
}

const DeleteBtn = (element, cartObj) => {
    cart.DeleteProduct(cartObj.Id);
    const card = element.closest(".card-product_cart");
    card.querySelector(".card-product__count").innerText = cartObj.Count;
    card.querySelector(".price_main").innerText = cartObj.GetPriceCount();
    card.querySelector(".price_old").innerText = cartObj.GetOldPriceCount();
    document.getElementById(cartObj.Id).querySelector(".card_valid").innerText = "";

    drawCount.DrawCartCount();
    refreshPrice();

}

const DeleteFromCart = (element, cartObj) => {

    cart.DeleteFromCart(cartObj.Id);
    element.closest(".card-product_cart").remove();
    drawCount.DrawCartCount();
    refreshPrice();
}


const GenerateCard = (cartProduct) => {


    const product = cartProduct.GetProduct();
    const div = dom.createElemDOM("div", "card-product_cart");
    div.id = product.Id;

    const img = div.appendChild(dom.createElemDOM("img", "card-product__image"));
    img.src = product.Url;

    const infoWrapAll = div.appendChild(dom.createElemDOM("div", "card-product__info"));

    const infoWrap = infoWrapAll.appendChild(dom.createElemDOM("div", "card-info__wrap"));

    const countWrap = infoWrapAll.appendChild(dom.createElemDOM("div", "card-count__wrap"));

    infoWrap.appendChild(dom.createElemDOM("h3", "card-product__text card-product__title", product.Name));
    infoWrap.appendChild(dom.createElemDOM("p", "card-product__text card-product__description", product.Description));

    const priceWrap = infoWrap.appendChild(dom.createElemDOM("div", "card-product__price"));


    priceWrap.appendChild(dom.createElemDOM("p", "card-product__text price_main ", cartProduct.GetPriceCount()));
    priceWrap.appendChild(dom.createElemDOM("del", "price_old ", cartProduct.GetOldPriceCount()));

    const delButt = countWrap.appendChild(dom.createElemDOM("div", "btn_calc btn_white"));
    delButt.appendChild(dom.createElemDOM("span", "btn_calc_minus"));
    delButt.addEventListener("click", (e) => DeleteBtn(e.target, cartProduct));
    countWrap.appendChild(dom.createElemDOM("p", "card-product__text card-product__title card-product__count", cartProduct.Count));
    const addButt = countWrap.appendChild(dom.createElemDOM("div", 'btn_calc btn_white'));
    addButt.appendChild(dom.createElemDOM("span", "btn_calc_plus"));
    addButt.addEventListener("click", (e) => AddBtn(e.target, cartProduct));


    countWrap.before(dom.createElemDOM("p", "card_valid card-product__text card-product__description"));

    const delProduct = div.appendChild(dom.createElemDOM("div", "card__del"));
    delProduct.addEventListener("click", (e) => DeleteFromCart(e.target, cartProduct));


    return div;

}
const checkCart = () => {
    if (cart.listCart.length > 0) {
        document.querySelector("#idCart").classList.contains("hide") ? document.querySelector("#idCart").classList.remove("hide") : "";
        !document.querySelector(".wrap_start").classList.contains("hide") ? document.querySelector(".wrap_start").classList.add("hide") : "";
    } else {
        !document.querySelector("#idCart").classList.contains("hide") ? document.querySelector("#idCart").classList.add("hide") : "";
        document.querySelector(".wrap_start").classList.contains("hide") ? document.querySelector(".wrap_start").classList.remove("hide") : "";
    }
    return cart.listCart.length > 0;
}
const refreshPrice = () => {
    if (checkCart()) {
        const totalPrice = cart.GetSumCount();
        document.querySelector(".cart__total-cost").innerHTML = totalPrice.sum;
        document.querySelector(".cart__total-cost_old").innerHTML = totalPrice.sumWithoutDisc;
        document.querySelector(".cart__total-count").innerHTML = cart.GetCountCart();
    }
}



document.addEventListener("DOMContentLoaded", () => {


    [...cart.listCart].forEach(cartProduct => document.querySelector('.container_cart').appendChild(GenerateCard(cartProduct)));

    // document.getElementById('idCart').addEventListener("change", refreshPrice);
    refreshPrice();





})