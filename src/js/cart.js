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
        this._id = id;
    }

    get Id() {

        return this._id;
    }

    get Count() {
        return this._count;
    }

    AddToCount() {
        const count = this.GetProduct().Count;
        if (count > this._count) {
            this._count++;
        } else {
            throw new Error("Available: " + count);
        }
    }

    CheckCount() {
        return GetProduct().Count
    }

    DeleteFromCount() {
        if (this._count > 0) this._count--;
    }

    GetProduct() {
        return list.GetProduct(this.Id);
    }

    ApplyData(json) {
        Object.assign(this, json);
    }

}

const GetIndex = (id) => {
    const listId = [...listCart].map(elem => elem.Id);
    return listId.indexOf(id);
}

const AddToCart = (id) => {
    // Найти элемент в корзине

    const index = GetIndex(id);
    if (index == -1) {
        listCart.push(new CartProduct(id));

        // console.log(listCart);

    } else {
        // try {
        listCart[index].AddToCount();
        // } catch (err) {
        //     throw new Error(err)
        //     // alert(err.message);
        // }
    }

    storage.setLocal("cart", listCart);


}
const DeleteProduct = (id) => {
    // Найти элемент в корзине
    const index = GetIndex(id);
    if (index != -1) {
        listCart[index].DeleteFromCount();
    }
    storage.setLocal("cart", listCart);
}

const DeleteFromCart = (id) => {
    const index = GetIndex(id);
    if (index != -1) {
        listCart.splice(index, 1);
        console.log(listCart);
    }
    storage.setLocal("cart", listCart);
}
const GetCart = (id) => {
    const index = GetIndex(id)
    if (index != -1) {
        return listCart[index];
    }
    return false;
}

const GetCountCart = () => {
    return listCart.reduce((prev, curr) => prev + curr.Count, 0);
}

const GetSumCount = () => {
    let sum = listCart[0].GetProduct().Price;
    for (let i = 1; i < listCart.length; i++)
        sum = listCart[i].GetProduct().SumPrice(sum);

    return list.Product.GetPriceFormat(sum);
    // return listCart.reduce((prev, curr) => {
    //     console.log(curr.GetProduct())
    //     curr.GetProduct().SumPrice(prev);
    // });
}


const GetCartAll = () => {
    listCart = storage.getLocal("cart");
    listCart = listCart.map(elem => {
        const cardP = new CartProduct;
        cardP.ApplyData(elem);
        return cardP;

    });

}
GetCartAll();

export {
    listCart,
    GetCart,
    AddToCart,
    DeleteProduct,
    DeleteFromCart,
    GetCartAll,
    GetCountCart,
    GetSumCount,
    CartProduct
}