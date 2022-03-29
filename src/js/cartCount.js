const cart = require('./cart');

const DrawCartCount = () => {
    const count = cart.GetCountCart();
    const link_cart = document.querySelector(".link_cart");
    const link_img = link_cart.querySelector(".link_cart__img");
    const link_count = link_cart.querySelector(".link_cart__count");

    if (count) {
        if (!link_img.classList.contains("link_cart__img_in")) link_img.classList.add("link_cart__img_in");
        link_count.innerText = count;
    } else {
        if (link_img.classList.contains("link_cart__img_in")) link_img.classList.remove("link_cart__img_in");
        link_count.innerText = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    DrawCartCount();
})

export {
    DrawCartCount
}