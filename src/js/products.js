// const {
//     months
// } = require("moment");
const moment = require("../../node_modules/moment/moment");
class Product {
    static _count = 0;
    constructor(name, description, category, price, url, count, discont, date) {
        this.Name = name;
        this.Description = description;
        this.Category = category;
        this.Price = price;
        this.Url = url;
        discont ? this.Discont = discont : this.Discont = 0;
        date ? this.Date = moment(date, "DD.MM.YY") : this.Date = moment();
        this.Count = count;
        this.Id = ++Product._count;
    }
    HasDiscount() {
        return this.Discont >= 0 ? true : false;
    }
    GetDiscount() {
        return `-${this.Discont}%`;
    }
    GetOldPrice() {
        return this.HasDiscount() ? Price : "";
    }
    GetPrice() {
        //TODO return format RP 22.000.000
        return this.HasDiscount() ? this.Price * (100 - this.Discont) / 100 : this.Price;
    }
    IsNew() {
        return moment().diff(this.Date, "months") <= 1;
    }

}

const listOfProductsAll = [];
listOfProductsAll.push(new Product("Syltherine", "Stylish cafe chair", "chair", 3500000, "./images/our products/syltherine.png", 2, 30, "20.02.21"));
listOfProductsAll.push(new Product("Syltherine", "Stylish cafe chair", "chair", 2500000, "/images/our products/syltherine.png", 2, 30, "20.02.22"));



export {
    listOfProductsAll
};