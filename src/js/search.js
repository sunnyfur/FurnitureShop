
const Search = () =>{
let search=document.getElementById("header__search");
search.onkeyup=function(){
    let searchCard=document.querySelectorAll(".card-product");
    let search_value=this.value.trim().toUpperCase();
    let catalog=document.querySelectorAll(".card-product__text")
if (search_value) {
    document.querySelector(".main-page").classList.add('hide');
    document.querySelector(".elems-container_values").classList.add('hide');
    document.querySelector(".beautiful").classList.add('hide');
    document.querySelector(".furniture").classList.add('hide');
    catalog.forEach(elem => {
        if (elem.innerText.toUpperCase().search(search_value) == -1) {
            elem.closest(".card-product").classList.add('hide');
            // elem.closest("img").classList.add('hide');
            
        }
    });
}
    else {
        catalog.forEach(elem => {
            // elem.closest("img").classList.remove('hide');
            elem.closest(".card-product").classList.remove('hide');
        })
    }

}}

export{
    Search
}
