// Only common code for all pages!!!
import './styles/index.scss';
require("./js/cartCount");

const like = require('./js/liked.js')
like.getListLike();
like.isListLiked();



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
        document.getElementById('errEmail').textContent = "You didn't enter your Email";
        document.getElementById('FollowEmail').textContent = '';
    } else if (!email.match(mailFormat)) {
        document.getElementById('errEmail').textContent = "Incorrect format Email. Example: example@mail.com";
        email = "";
        document.querySelector(".form-update__input").textContent = "";
        document.getElementById('FollowEmail').textContent = '';
        return false;
    } else {
        document.getElementById('errEmail').textContent = '';
        arrayEmail.push(email);
        localStorage.setItem('email', JSON.stringify(arrayEmail));
        document.querySelector(".form-update__input").textContent = "";
        document.getElementById('FollowEmail').textContent = "You've subscribed to an update";
        email = "";
    }
})