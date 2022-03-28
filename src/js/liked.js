const listLiked = [];
console.log(listLiked);
const localStorage = require("./LocalStorage.js");

 

const isLiked = (id) => {
    return listLiked.indexOf(id) != -1;
}

const toggleLike = (id) => {

    (isLiked(id)) ? listLiked.splice(listLiked.indexOf(id), 1) : listLiked.push(id);
    localStorage.setLocal("favouriteCollection",listLiked);
}
// TODO  брать массив из LocalStorage, записывать в LocslStorage







export {
    listLiked,
    isLiked,
    toggleLike,
   }
