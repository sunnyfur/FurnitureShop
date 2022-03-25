const dom = require("./createElementDom");
const lists = require("./products.js");
const onLikeClick = (parent) => {
  const likebtn = parent.parentNode.querySelector(".btn_social_like");
  likebtn.classList.toggle("btn_social_liked");
  // todo брать id элемента карточки и добавлятьили удалять из избранного 

}


const GenerateCard = (product) => {
  const card = dom.createElemDOM("div", "card-product");
  card.id = product.id;

  const product__hover = dom.createElemDOM("div", "card-product__hover");
  card.appendChild(product__hover);
  product__hover.appendChild(dom.createElemDOM("button", "btn btn_card", "Add to cart"));
  const card_product__like = dom.createElemDOM("div", "card-product__like");
  product__hover.appendChild(card_product__like);

  let btn_social = dom.createElemDOM("div", "btn_social");
  card_product__like.appendChild(btn_social);
  btn_social.appendChild(dom.createElemDOM("div", "btn_social_share"));
  btn_social.appendChild(dom.createElemDOM("span", "", "Share"));

  btn_social = dom.createElemDOM("div", "btn_social");
  card_product__like.appendChild(btn_social);
  btn_social.appendChild(dom.createElemDOM("div", "btn_social_like"));
  btn_social.appendChild(dom.createElemDOM("span", "", "Like"));
  btn_social.addEventListener("click", (e) => onLikeClick(e.target));


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
    console.log(lists.listOfProductsAll);
    addCards(startFrom, numOfLoaded);


  });
  document.querySelector("#idShowMore").addEventListener("click", (e) => addCards(startFrom, numOfLoaded))
}
export {
  GenerateCards
};