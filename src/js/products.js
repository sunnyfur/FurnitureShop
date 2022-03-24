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
        this.Id = "idProduct" + ++Product._count;
    }
    HasDiscount() {
        return this.Discont > 0 ? true : false;
    }
    GetDiscount() {
        return `-${this.Discont}%`;
    }
    GetOldPrice() {
        return this.HasDiscount() ? this.Price : "";
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
listOfProductsAll.push(new Product("Syltherine", "Stylish cafe chair", "chair", 2500000, require("../images/our products/syltherine.png"), 2, 30, "20.02.21"));
listOfProductsAll.push(new Product("Leviosa", "Stylish cafe chair", "chair", 2500000, require("../images/our products/leviosa.png"), 5, 0, "30.12.21"));
listOfProductsAll.push(new Product("Lolito", "Luxury big sofa", "sofa", 7000000, require("../images/our products/lolito.png"), 2, 50, "20.02.21"));
listOfProductsAll.push(new Product("Respira", "Minimalist fan", "fan", 500000, require("../images/our products/respira.png"), 2, 0, "20.02.22"));
listOfProductsAll.push(new Product("Grifo", "Night lamp", "lamp", 1500000, require("../images/our products/grifo.png"), 2, 0, "20.02.21"));
listOfProductsAll.push(new Product("Muggo", "Small mug", "mug", 150000, require("../images/our products/muggo.png"), 2, 0, "20.02.22"));
listOfProductsAll.push(new Product("Pingky", "Cute bed set", "bed", 7000000, require("../images/our products/pingky.png"), 2, 50, "20.02.21"));
listOfProductsAll.push(new Product("Potty", "Minimalist flower pot", "pot", 500000, require("../images/our products/potty.png"), 2, 0, "20.02.22"));

listOfProductsAll.push(new Product("Syltherine", "Stylish cafe chair", "chair", 2500000, require("../images/our products/syltherine.png"), 2, 30, "20.02.21"));
listOfProductsAll.push(new Product("Leviosa", "Stylish cafe chair", "chair", 2500000, require("../images/our products/leviosa.png"), 5, 0, "30.12.21"));
listOfProductsAll.push(new Product("Lolito", "Luxury big sofa", "sofa", 7000000, require("../images/our products/lolito.png"), 2, 50, "20.02.21"));
listOfProductsAll.push(new Product("Respira", "Minimalist fan", "fan", 500000, require("../images/our products/respira.png"), 2, 0, "20.02.22"));
listOfProductsAll.push(new Product("Grifo", "Night lamp", "lamp", 1500000, require("../images/our products/grifo.png"), 2, 0, "20.02.21"));
listOfProductsAll.push(new Product("Muggo", "Small mug", "mug", 150000, require("../images/our products/muggo.png"), 2, 0, "20.02.22"));
listOfProductsAll.push(new Product("Pingky", "Cute bed set", "bed", 7000000, require("../images/our products/pingky.png"), 2, 50, "20.02.21"));
listOfProductsAll.push(new Product("Potty", "Minimalist flower pot", "pot", 500000, require("../images/our products/potty.png"), 2, 0, "20.02.22"));

listOfProductsAll.push(new Product("Syltherine", "Stylish cafe chair", "chair", 2500000, require("../images/our products/syltherine.png"), 2, 30, "20.02.21"));
listOfProductsAll.push(new Product("Leviosa", "Stylish cafe chair", "chair", 2500000, require("../images/our products/leviosa.png"), 5, 0, "30.12.21"));
listOfProductsAll.push(new Product("Lolito", "Luxury big sofa", "sofa", 7000000, require("../images/our products/lolito.png"), 2, 50, "20.02.21"));
listOfProductsAll.push(new Product("Respira", "Minimalist fan", "fan", 500000, require("../images/our products/respira.png"), 2, 0, "20.02.22"));
listOfProductsAll.push(new Product("Grifo", "Night lamp", "lamp", 1500000, require("../images/our products/grifo.png"), 2, 0, "20.02.21"));
listOfProductsAll.push(new Product("Muggo", "Small mug", "mug", 150000, require("../images/our products/muggo.png"), 2, 0, "20.02.22"));
listOfProductsAll.push(new Product("Pingky", "Cute bed set", "bed", 7000000, require("../images/our products/pingky.png"), 2, 50, "20.02.21"));
listOfProductsAll.push(new Product("Potty", "Minimalist flower pot", "pot", 500000, require("../images/our products/potty.png"), 2, 0, "20.02.22"));

listOfProductsAll.push(new Product("Syltherine", "Stylish cafe chair", "chair", 2500000, require("../images/our products/syltherine.png"), 2, 30, "20.02.21"));
listOfProductsAll.push(new Product("Leviosa", "Stylish cafe chair", "chair", 2500000, require("../images/our products/leviosa.png"), 5, 0, "30.12.21"));
listOfProductsAll.push(new Product("Lolito", "Luxury big sofa", "sofa", 7000000, require("../images/our products/lolito.png"), 2, 50, "20.02.21"));
listOfProductsAll.push(new Product("Respira", "Minimalist fan", "fan", 500000, require("../images/our products/respira.png"), 2, 0, "20.02.22"));
listOfProductsAll.push(new Product("Grifo", "Night lamp", "lamp", 1500000, require("../images/our products/grifo.png"), 2, 0, "20.02.21"));
listOfProductsAll.push(new Product("Muggo", "Small mug", "mug", 150000, require("../images/our products/muggo.png"), 2, 0, "20.02.22"));
listOfProductsAll.push(new Product("Pingky", "Cute bed set", "bed", 7000000, require("../images/our products/pingky.png"), 2, 50, "20.02.21"));
listOfProductsAll.push(new Product("Potty", "Minimalist flower pot", "pot", 500000, require("../images/our products/potty.png"), 2, 0, "20.02.22"));



export {
    listOfProductsAll
};