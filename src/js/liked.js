const listLiked = ["idProduct1", "idProduct6"];

const isLiked = (id) => {
    return listLiked.indexOf(id) != -1;
}

const toggleLike = (id) => {

    console.log(id);
    (isLiked) ? listLiked.splice(listLiked.indexOf(id), 1): listLiked.push(id);
    console.log(listLiked);
}
// TODO  брать массив из LocalStorage, записывать в LocslStorage

export {
    listLiked,
    isLiked,
    toggleLike
}