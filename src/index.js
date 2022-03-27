import './styles/index.scss';

// const lists = require("./js/products.js");
const addCards = require("./js/allProductsHtml.js");
addCards.GenerateCards();

const slider = require("./js/slider.js");
slider.SliderHeaderBlock();
slider.SliderBeautifulBlock();

let arrayEmail = [];
document.addEventListener("DOMContentLoaded", function (event) {
    if (localStorage.getItem('email') != null) {
        arrayEmail = JSON.parse(localStorage.getItem('email'));
    }
});

email__btn.addEventListener("click", (event) => {
    let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    let email = document.querySelector(".form-update__input").value;
    if (email == "") {
        document.getElementById('errEmail').textContent = "Вы не ввели Email";
        document.getElementById('FollowEmail').textContent = '';
    } else if (!email.match(mailFormat)) {
        document.getElementById('errEmail').textContent = "Неверный формат Email. Пример: example@mail.com";
        email = "";
        document.querySelector(".form-update__input").textContent = "";
        document.getElementById('FollowEmail').textContent = '';
        return false;
    } else {
        document.getElementById('errEmail').textContent = '';
        arrayEmail.push(email);
        localStorage.setItem('email', JSON.stringify(arrayEmail));
        document.querySelector(".form-update__input").textContent = "";
        document.getElementById('FollowEmail').textContent = "Вы подписались на обновления";
        email = "";
    }
})