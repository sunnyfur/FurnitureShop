const dom = require('./createElementDom');
const lists = require("./products");
const like = require("./liked");
const cart = require('./cart');
const drawCount = require('./cartCount');

const onLikeClick = (element) => {
  const likebtn = element.parentNode.querySelector(".btn_social_like");
  likebtn.classList.toggle("btn_social_liked");
  like.toggleLike(element.closest(".card-product").id);

}

const onShareClick = (element)=>{
  let products=element.closest(".card-product").id
  let title=element.closest(".card-product__text")
const shareData = {
    title: {title},
    text: 'Look!',
    url: 'https://sunnyfur.github.io/FurnitureShop/#'+{products}
  }
  navigator.share(shareData)
}


const AddToCart = (element, product) => {
  let erMsg = "";
  try {
    cart.AddToCart(product.Id);
  } catch (err) {
    erMsg = err.message;
  }
  // console.log(element.closest(".card-product"));
  const card_cart = element.closest(".card-product").querySelector(".card-cart");

  if (!card_cart.classList.contains("card-cart-in")) card_cart.classList.add("card-cart-in");
  card_cart.querySelector(".card-cart__count").innerText = cart.GetCart(product.Id).Count + "  " + erMsg;
  drawCount.DrawCartCount();

}

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
  btn_add.addEventListener("click", (e) => AddToCart(e.target, product));

  const card_product__like = dom.createElemDOM("div", "card-product__like");
  product__hover.appendChild(card_product__like);

  let btn_social_share = dom.createElemDOM("div", "btn_social");
  card_product__like.appendChild(btn_social_share);
  btn_social_share.appendChild(dom.createElemDOM("div", "btn_social_share"));
  btn_social_share.appendChild(dom.createElemDOM("span", "", "Share"));
  btn_social_share.addEventListener("click", (e) => onShareClick(e.target));

  let btn_social = dom.createElemDOM("div", "btn_social");
  card_product__like.appendChild(btn_social);
  const btn_like = dom.createElemDOM("div", "btn_social_like");
  btn_social.appendChild(btn_like);
  btn_social.appendChild(dom.createElemDOM("span", "", "Like"));
  btn_social.addEventListener("click", (e) => onLikeClick(e.target));
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
let startFrom = 0;
let numOfLoaded = 8;
const addCards = (count = numOfLoaded) => {
  let i = +startFrom;
  do {
    document.querySelector(".container_products").appendChild(GenerateCard(lists.listOfProductsAll[i]));
    i++;
  } while (i < startFrom + numOfLoaded && i < lists.listOfProductsAll.length);
  startFrom += numOfLoaded;
}

const GenerateCards = () => {
  document.addEventListener("DOMContentLoaded", () => {
    // console.log(lists.listOfProductsAll);
    addCards(startFrom, numOfLoaded);

  });
  document.querySelector("#idShowMore").addEventListener("click", (e) => addCards(startFrom, numOfLoaded))
}
export {
  GenerateCards,
  GenerateCard,
  onShareClick,
  AddToCart
};