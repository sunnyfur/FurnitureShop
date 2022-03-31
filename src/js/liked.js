let listLiked = [];

const storage = require("./LocalStorage.js");

const getListLike = () => {

    const collection = localStorage.getItem("favouriteCollection");
    if (collection) {
        listLiked = JSON.parse(localStorage.getItem("favouriteCollection"));

    } else {

        localStorage.setItem("favouriteCollection", JSON.stringify([]));
    }
}


const isLiked = (id) => {
    return listLiked.indexOf(id) != -1;
}

const toggleLike = (id) => {

    (isLiked(id)) ? listLiked.splice(listLiked.indexOf(id), 1): listLiked.push(id);
    storage.setLocal("favouriteCollection", listLiked);
    console.log(id);
    console.log(listLiked);
    isListLiked();
}
// TODO  брать массив из LocalStorae, записывать в LocslStorage
const isListLiked=()=>{
    let len;
    len=listLiked.length;
    let linkLikedimg=document.getElementById('linkLikedimg');
    let linkLikedcount=document.getElementById('linkLikedcount');
    if(len==0)
        {linkLikedimg.classList="link_liked__img";
        linkLikedcount.innerText="";}
    
    else
      {  linkLikedimg.classList="link_liked__img_in";
        linkLikedcount.innerText=len; }
    

}






export {
    listLiked,
    isLiked,
    toggleLike,
    getListLike,
    isListLiked
}