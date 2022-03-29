const like = require('./js/liked');
like.getListLike();
console.log(like.listLiked);

const products = require('./js/products.js');

const allProductsHTML=require('./js/allProductsHtml.js');

let favouriteProduct;


like.listLiked.forEach(e => {


    favouriteProduct = products.GetProduct(e);
    console.log(favouriteProduct);

    document.getElementById('cart-favouirite').appendChild(allProductsHTML.GenerateCard(favouriteProduct));

})


