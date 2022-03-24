import './styles/index.scss';

const lists = require("./js/products.js");
const card = require("./js/allProductsHtml.js");
console.log(lists.listOfProductsAll);
card.GenerateCard(lists.listOfProductsAll[0]);