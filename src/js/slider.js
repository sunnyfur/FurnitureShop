const SliderHeaderBlock = () => {
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

}



const SliderBeautifulBlock = () => {

    carousel.querySelector('.arrow').onclick = function () {

        let width = 500; // ширина картинки
        let count = 2; // видимое количество изображений

        let list = carousel.querySelector('ul');
        let listElems = carousel.querySelectorAll('li');

        let position = 0; // положение ленты прокрутки
        position -= width * count;
        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
        // переместить элемент вниз 
        const firstElem = listElems[0];
        list.appendChild(firstElem);


    };
}


const SliderArticles = () => {
    let slideIndex = 2; //начальный блок
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("article_block");
        if (n > slides.length) {
            slideIndex = 2
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        slides[slideIndex].style.display = "block";
        slides[slideIndex-1].style.display = "block";
        slides[slideIndex-2].style.display = "block";
    }


    document.querySelector('.articles_prev').addEventListener('click', (e) => plusSlides(-1));
    document.querySelector('.articles_next').addEventListener('click', (e) => plusSlides(1));
}
export {
    SliderHeaderBlock,
    SliderBeautifulBlock,
    SliderArticles
}