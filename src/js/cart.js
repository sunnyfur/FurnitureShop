const list = require("./products");
const listCart = [];

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
        // try {
        const allCount = list.listOfProductsAll.find(elem => elem.Id == this.Id);

        console.log(allCount.Count);
        if (allCount.Count > this._count) {
            this._count++;
        } else {
            throw new Error("There is not enough product");
        }

    }
    DeleteFromCount() {
        if (this._count > 0) this._count--;
    }


}

const AddToCart = (id) => {
    // Найти элемент в корзине
    const listId = [...listCart].map(elem => elem.Id);
    const index = listId.indexOf(id);
    if (index == -1) {
        listCart.push(new CartProduct(id))
    } else {
        try {
            listCart[index].AddToCount();
        } catch (err) {
            alert(err.message);
        }
    }

}
const DeleteFromCart = (id) => {
    // Найти элемент в корзине
    const listId = [...listCart].map(elem => elem.Id);
    const index = listId.indexOf(id);
    if (index != -1) {
        listCart[index].DeleteFromCount();
    }
}

// listCart.push(new CartProduct("idProduct1"));
// listCart.push(new CartProduct("idProduct3"));

// AddToCart("idProduct1");
// AddToCart("idProduct1");


export {
    AddToCart,
    DeleteFromCart
}