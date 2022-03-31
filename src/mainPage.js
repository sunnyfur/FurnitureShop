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