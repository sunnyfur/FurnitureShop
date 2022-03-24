const GenerateCard = (product) => {
    const card = document.createElement("div");
    card.innerHTML = ` <div class="card-product__hover">
    <button class="btn btn_card">Add to cart</button>
    <div class="card-product__like">

      <div class="btn_social">
        <div class=" btn_social_share"> </div>
        <span>Share</span>
      </div>
      <div class="btn_social">
        <div class=" btn_social_like "> </div>
        <span>Like</span>
      </div>
    </div>
  </div>
  <div class="card-product__bonuses">
    <span class="card-product__bonus card-product__bonus_sale">-50%</span>
    <span class="card-product__bonus card-product__bonus_new">New</span>
  </div>
  <img class="card-product__image" src="${product.Url}>" alt="продукт1">
  <div class="card-product__info">
    <h3 class="card-product__text card-product__title">Syltherine</h3>
    <p class="card-product__text card-product__description">Stylish cafe chair</p>
    <div class="card-product__price">
      <p class="card-product__text price_main">Rp 2.500.000</p>
      <del class="price_old">Rp 3.500.000</del>
    </div>
  </div>`;
    const img = document.createElement("img");
    img.src = product.Url;

    card.classList.add("card-product");
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".container_products").appendChild(img);

    });
    console.log(product.Url);
    // return card;
}

export {
    GenerateCard
};

// TODO сгенерировать карточки Для всех продуктов
// TODO добавить событие на кнопку далее для отображения следующих карьочек