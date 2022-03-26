const getLocal = (type) => {
    let list = JSON.parse(localStorage.getItem(type));
    return list;
}
const setLocal = (list, type) => {
    localStorage.setItem(type, JSON.stringify(list))
}
export {
    getLocal,
    setLocal
}