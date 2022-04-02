const like = require('./js/liked');
like.getListLike();
const allProductsHtml = require('./js/allProductsHtml');
const products = require('./js/products.js');
const dom = require("./js/createElementDom");

const cart = require('./js/cart');

const LikeSearch = require("./js/search.js");
LikeSearch.SearchLike();


const onLikeClickFavourite = (element) => {
  const likebtn = element.parentNode.querySelector(".btn_social_like");
  likebtn.classList.toggle("btn_social_liked");
  like.toggleLike(element.closest(".card-product").id);
  like.isListLiked();
  document.getElementById(element.closest(".card-product").id).remove();
}





let favouriteProduct;

const GenerateCard = (product) => {
  const card = dom.createElemDOM("div", "card-product");

  card.id = product.Id;

  const card_cart = dom.createElemDOM("div", "card-cart");
  card.appendChild(card_cart);
  card_cart.appendChild(dom.createElemDOM("div", "card-cart__img"));
  const cartPr = cart.GetCart(product.Id);
  let count = "";
  if (cartPr) {
    card_cart.classList.add("card-cart-in");
    count = cartPr.Count;
  }
  card_cart.appendChild(dom.createElemDOM("span", "card-cart__count", count));

  const product__hover = dom.createElemDOM("div", "card-product__hover");
  card.appendChild(product__hover);

  const btn_add = dom.createElemDOM("input", "btn btn_card", "Add to cart");
  btn_add.value = "Add to cart";
  btn_add.type = "button";

  product__hover.appendChild(btn_add);
  btn_add.addEventListener("click", (e) => allProductsHtml.AddToCart(e.target, product));

  const card_product__like = dom.createElemDOM("div", "card-product__like");
  product__hover.appendChild(card_product__like);

  let btn_social = dom.createElemDOM("div", "btn_social");
  card_product__like.appendChild(btn_social);
  btn_social.appendChild(dom.createElemDOM("div", "btn_social_share"));
  btn_social.appendChild(dom.createElemDOM("span", "", "Share"));
  btn_social.addEventListener("click", (e) => allProductsHtml.onShareClick(e.target));


  btn_social = dom.createElemDOM("div", "btn_social");
  card_product__like.appendChild(btn_social);
  const btn_like = dom.createElemDOM("div", "btn_social_like");
  btn_social.appendChild(btn_like);
  btn_social.appendChild(dom.createElemDOM("span", "", "Like"));
  btn_social.addEventListener("click", (e) => onLikeClickFavourite(e.target));
  like.isLiked(product.Id) ? btn_like.classList.add("btn_social_liked") : "";


  const bonuses = dom.createElemDOM("div", "card-product__bonuses");
  card.appendChild(bonuses);
  product.HasDiscount() ? bonuses.appendChild(dom.createElemDOM("span", "card-product__bonus card-product__bonus_sale", product.GetDiscount())) : "";
  product.IsNew() ? bonuses.appendChild(dom.createElemDOM("span", "card-product__bonus card-product__bonus_new", "New")) : "";
  const img = dom.createElemDOM("img", "card-product__image");
  img.src = product.Url;
  card.appendChild(img);

  const info = dom.createElemDOM("div", "card-product__info");
  card.appendChild(info);
  info.appendChild(dom.createElemDOM("h3", "card-product__text card-product__title", product.Name));
  info.appendChild(dom.createElemDOM("p", "card-product__text card-product__description", product.Description));

  const price = dom.createElemDOM("div", "card-product__price");
  info.appendChild(price);
  price.appendChild(dom.createElemDOM("p", "card-product__text price_main", product.GetPrice()));
  price.appendChild(dom.createElemDOM("del", "price_old", product.GetOldPrice()));

  return card;
}




like.listLiked.forEach(e => {


  favouriteProduct = products.GetProduct(e);
  console.log(favouriteProduct);

  document.getElementById('cart-favouirite').appendChild(GenerateCard(favouriteProduct));

})