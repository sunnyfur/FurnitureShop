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

    getListLike();
    (isLiked(id)) ? listLiked.splice(listLiked.indexOf(id), 1): listLiked.push(id);
    storage.setLocal("favouriteCollection", listLiked);
}
// TODO  брать массив из LocalStorage, записывать в LocslStorage







export {
    listLiked,
    isLiked,
    toggleLike,

}