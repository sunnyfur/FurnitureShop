const getLocal = (type) => {

    let list = JSON.parse(localStorage.getItem(type));
    try {
        list.length;
    } catch {
        list = [];
    }

    return list;

}
const setLocal = (type, list) => {
    localStorage.setItem(type, JSON.stringify(list));
}
export {
    getLocal,
    setLocal
}