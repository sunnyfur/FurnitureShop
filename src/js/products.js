const moment = require("moment");
const Dinero = require('dinero.js');
Dinero.globalLocale = 'us-US';
class Product {
    static _count = 0;
    constructor(name, description, category, price, url, count, discont, date) {
        this.Name = name;
        this.Description = description;
        this.Category = category;
        this.Price = Dinero.default({
            amount: price,
            currency: 'USD'
        });
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
        const price = this.Price.toFormat('$0,0.00');
        // const price = this.Price;
        return this.HasDiscount() ? price : "";
    }
    GetPrice() {
        return Product.GetPriceFormat(this.GetPriceClear());
    }
    GetPriceClear() {
        return this.HasDiscount() ? this.Price.percentage(100 - this.Discont) : this.Price;
    }
    IsNew() {
        return moment().diff(this.Date, "months") <= 1;
    }
    SumPrice(price) {
        if (price == 0) price = Dinero.default({
            amount: price
        });
        return this.Price.add(price);
    }
    GetPriceCount(count) {
        return Product.GetPriceFormat(this.GetPriceClear().multiply(count));
    }
    GetOldPriceCount(count) {
        if (this.HasDiscount()) {
            const price = this.Price.multiply(count).toFormat('$0,0.00');
            return price;
        }
        return "";
    }

    static GetPriceFormat(price) {
        return price.toFormat('$0,0.00');

    }


    static GetSumCount(cart) {
        let sum = Dinero.default({
            amount: 0
        });
        let sumWithoutDisc = Dinero.default({
            amount: 0
        });
        cart.forEach(element => {

            const product = GetProduct(element.Id);
            sum = sum.add(product.GetPriceClear().multiply(element.Count));
            sumWithoutDisc = sumWithoutDisc.add(product.Price.multiply(element.Count));
        });

        let rez = Product.GetPriceFormat(sumWithoutDisc);
        if (sum.getAmount() == sumWithoutDisc.getAmount()) rez = "";
        return {
            sum: Product.GetPriceFormat(sum),
            sumWithoutDisc: rez
        };

    }


}
const GetProduct = (id) => {
    return listOfProductsAll.find(elem => elem.Id == id);
}

const listOfProductsAll = [];
listOfProductsAll.push(new Product("Syltherine", "Stylish cafe chair", "chair", 25000, require("../images/our products/syltherine.png"), 2, 30, "20.02.21"));
listOfProductsAll.push(new Product("Leviosa", "Stylish cafe chair", "chair", 25000, require("../images/our products/leviosa.png"), 5, 0, "30.12.21"));
listOfProductsAll.push(new Product("Lolito", "Luxury big sofa", "sofa", 70000, require("../images/our products/lolito.png"), 2, 50, "20.02.21"));
listOfProductsAll.push(new Product("Respira", "Minimalist fan", "fan", 50000, require("../images/our products/respira.png"), 2, 0, "20.02.22"));
listOfProductsAll.push(new Product("Grifo", "Night lamp", "lamp", 15000, require("../images/our products/grifo.png"), 2, 0, "20.02.21"));
listOfProductsAll.push(new Product("Muggo", "Small mug", "mug", 1500, require("../images/our products/muggo.png"), 2, 0, "20.02.22"));
listOfProductsAll.push(new Product("Pingky", "Cute bed set", "bed", 70000, require("../images/our products/pingky.png"), 2, 50, "20.02.21"));
listOfProductsAll.push(new Product("Potty", "Minimalist flower pot", "pot", 5000, require("../images/our products/potty.png"), 2, 0, "20.02.22"));

listOfProductsAll.push(new Product("Syltherine", "Stylish cafe chair", "chair", 25000, require("../images/our products/syltherine.png"), 2, 30, "20.02.21"));
listOfProductsAll.push(new Product("Leviosa", "Stylish cafe chair", "chair", 25000, require("../images/our products/leviosa.png"), 5, 0, "30.12.21"));
listOfProductsAll.push(new Product("Lolito", "Luxury big sofa", "sofa", 70000, require("../images/our products/lolito.png"), 2, 50, "20.02.21"));
listOfProductsAll.push(new Product("Respira", "Minimalist fan", "fan", 5000, require("../images/our products/respira.png"), 2, 0, "20.02.22"));
listOfProductsAll.push(new Product("Grifo", "Night lamp", "lamp", 15000, require("../images/our products/grifo.png"), 2, 0, "20.02.21"));
listOfProductsAll.push(new Product("Muggo", "Small mug", "mug", 1500, require("../images/our products/muggo.png"), 2, 0, "20.02.22"));
listOfProductsAll.push(new Product("Pingky", "Cute bed set", "bed", 70000, require("../images/our products/pingky.png"), 2, 50, "20.02.21"));
listOfProductsAll.push(new Product("Potty", "Minimalist flower pot", "pot", 5000, require("../images/our products/potty.png"), 2, 0, "20.02.22"));

listOfProductsAll.push(new Product("Syltherine", "Stylish cafe chair", "chair", 25000, require("../images/our products/syltherine.png"), 2, 30, "20.02.21"));
listOfProductsAll.push(new Product("Leviosa", "Stylish cafe chair", "chair", 25000, require("../images/our products/leviosa.png"), 5, 0, "30.12.21"));
listOfProductsAll.push(new Product("Lolito", "Luxury big sofa", "sofa", 70000, require("../images/our products/lolito.png"), 2, 50, "20.02.21"));
listOfProductsAll.push(new Product("Respira", "Minimalist fan", "fan", 5000, require("../images/our products/respira.png"), 2, 0, "20.02.22"));
listOfProductsAll.push(new Product("Grifo", "Night lamp", "lamp", 15000, require("../images/our products/grifo.png"), 2, 0, "20.02.21"));
listOfProductsAll.push(new Product("Muggo", "Small mug", "mug", 1500, require("../images/our products/muggo.png"), 2, 0, "20.02.22"));
listOfProductsAll.push(new Product("Pingky", "Cute bed set", "bed", 70000, require("../images/our products/pingky.png"), 2, 50, "20.02.21"));
listOfProductsAll.push(new Product("Potty", "Minimalist flower pot", "pot", 50000, require("../images/our products/potty.png"), 2, 0, "20.02.22"));

listOfProductsAll.push(new Product("Syltherine", "Stylish cafe chair", "chair", 25000, require("../images/our products/syltherine.png"), 2, 30, "20.02.21"));
listOfProductsAll.push(new Product("Leviosa", "Stylish cafe chair", "chair", 25000, require("../images/our products/leviosa.png"), 5, 0, "30.12.21"));
listOfProductsAll.push(new Product("Lolito", "Luxury big sofa", "sofa", 70000, require("../images/our products/lolito.png"), 2, 50, "20.02.21"));
listOfProductsAll.push(new Product("Respira", "Minimalist fan", "fan", 5000, require("../images/our products/respira.png"), 2, 0, "20.02.22"));
listOfProductsAll.push(new Product("Grifo", "Night lamp", "lamp", 15000, require("../images/our products/grifo.png"), 2, 0, "20.02.21"));
listOfProductsAll.push(new Product("Muggo", "Small mug", "mug", 1500, require("../images/our products/muggo.png"), 2, 0, "20.02.22"));
listOfProductsAll.push(new Product("Pingky", "Cute bed set", "bed", 70000, require("../images/our products/pingky.png"), 2, 50, "20.02.21"));
listOfProductsAll.push(new Product("Potty", "Minimalist flower pot", "pot", 5000, require("../images/our products/potty.png"), 2, 0, "20.02.22"));



export {
    listOfProductsAll,
    GetProduct,
    Product
};