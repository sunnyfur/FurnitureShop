import './styles/index.scss';

// const lists = require("./js/products.js");
const addCards = require("./js/allProductsHtml.js");
addCards.GenerateCards();


let slideIndex = 2;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i]
            .className
            .replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


document.querySelector('.prev').addEventListener('click', (e) => plusSlides(-1));
document.querySelector('.next').addEventListener('click', (e) => plusSlides(1));

document.querySelector('.dot1').addEventListener('click', (e) => currentSlide(1));
document.querySelector('.dot2').addEventListener('click', (e) => currentSlide(2));
document.querySelector('.dot3').addEventListener('click', (e) => currentSlide(3));