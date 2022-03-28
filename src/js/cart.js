const list = require("./products");
let listCart = [];
const storage = require('./LocalStorage');

class CartProduct {
    _id;
    _count = 1;
    constructor(id) {
        this.Id = id;

    }
    set Id(id) {
        //TODO проверить в списке товаров, если есть добавить, нет выдать ошибку

        this._id = id;
    }
    get Id() {

        return this._id;
    }

    get Count() {
        return this._count;
    }
    AddToCount() {

        // if (GetProduct().Count > this._count) {
        this._count++;
        alert("Add to cart");
        // } else {
        //     throw new Error("There is not enough product");
        // }

    }
    DeleteFromCount() {
        if (this._count > 0) this._count--;
    }

    GetProduct() {
        return list.GetProduct(this.Id);
    }


}

const AddToCart = (id) => {
    // Найти элемент в корзине
    const listId = [...listCart].map(elem => elem.Id);
    const index = listId.indexOf(id);
    if (index == -1) {
        listCart.push(new CartProduct(id));

    } else {
        //     try {
        listCart[index].AddToCount();
        //     } catch (err) {
        //         alert(err.message);
        //     }
    }

    storage.setLocal("cart", listCart);

}
const DeleteFromCart = (id) => {
    // Найти элемент в корзине
    const listId = [...listCart].map(elem => elem.Id);
    const index = listId.indexOf(id);
    if (index != -1) {
        listCart[index].DeleteFromCount();
    }
    storage.setLocal("cart", listCart);
}

// listCart.push(new CartProduct("idProduct1"));
// listCart.push(new CartProduct("idProduct3"));

// AddToCart("idProduct1");
// AddToCart("idProduct1");
const GetCart = () => {
    listCart = storage.getLocal("cart");
}
// GetCart();

export {
    listCart,
    AddToCart,
    DeleteFromCart
}