const addCards = require("./js/allProductsHtml.js");
addCards.GenerateCards();
require('./js/cart');
const slider = require("./js/slider.js");
slider.SliderHeaderBlock();
slider.SliderBeautifulBlock();
slider.SliderArticles();
const search = require("./js/search.js");
search.Search();

const like = require('./js/liked');
like.getListLike();

document.querySelector(".card__button").addEventListener("click",
    () => {
        location.href = "index.html#products";
    })

document.querySelector(".card2__button").addEventListener("click",
    () => {
        location.href = "inspiration.html";
    })