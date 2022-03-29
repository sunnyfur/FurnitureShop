import { listLiked } from "./js/liked";
import { GetProduct, listOfProductsAll } from "./js/products";



const onLikeClick = (element) => {
  const likebtn = element.parentNode.querySelector(".btn_social_like");
  likebtn.classList.toggle("btn_social_liked");
  like.toggleLike(element.closest(".card-product").id);

}

/* const createFavorite=()=>{

    like.listLiked.forEach(element =>{
   
        let cart = product.GetProduct(element);
        addCards.GenerateCard(cart);
     
     })

}
 */
addEventListener("DOMContentLoaded", function () {

addCards.GenerateCards();
    
});
