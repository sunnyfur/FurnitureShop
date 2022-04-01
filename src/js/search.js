const Search = () => {
    let search = document.getElementById("header__search");
    search.onkeyup = function () {
        let searchCard = document.querySelectorAll(".card-product");
        let search_value = this.value.trim().toUpperCase();
        if (search_value) {
            let noResult = document.getElementById('NoResults');
            document.querySelector(".main-page").classList.add('hide');
            document.querySelector(".elems-container_values").classList.add('hide');
            document.querySelector(".beautiful").classList.add('hide');
            document.querySelector(".furniture").classList.add('hide');
            document.querySelector(".articles").classList.add('hide');
            document.querySelector(".subtitle").innerHTML = "Seaching results";
            searchCard.forEach(elem => {
                if (elem.innerText.toUpperCase().search(search_value) == -1) {
                    elem.classList.add('hide');
                    document.querySelector("#idShowMore").classList.add('hide');
                }
            });
            let anyMatch = false;
            searchCard.forEach(function (elem) {
                let isMatching = new RegExp(search_value, "gi").test(elem.innerText.toUpperCase());
                anyMatch = anyMatch || isMatching;
                elem.classList.toggle("hide", !isMatching);
            });

            noResult.classList.toggle("hide", anyMatch);
            noResult.classList.toggle("unhide", !anyMatch)
        } else {
            searchCard.forEach(elem => {
                elem.classList.remove('hide');
                document.querySelector("#idShowMore").classList.remove('hide')
            })
        }
    }
}

const SearchLike = () => {
    let search = document.getElementById("header__search_like");
    search.onkeyup = function () {
        let searchCard = document.querySelectorAll(".card-product");
        let search_value = this.value.trim().toUpperCase();
        if (search_value) {
            let noResult = document.getElementById('NoResults');
            document.querySelector(".subtitle").innerHTML = "Seaching results from favourite products";
            searchCard.forEach(elem => {
                if (elem.innerText.toUpperCase().search(search_value) == -1) {
                    elem.classList.add('hide');
                    // document.querySelector("#idShowMore").classList.add('hide');
                }
            });
            let anyMatch = false;
            searchCard.forEach(function (elem) {
                let isMatching = new RegExp(search_value, "gi").test(elem.innerText.toUpperCase());
                anyMatch = anyMatch || isMatching;
                elem.classList.toggle("hide", !isMatching);
            });

            noResult.classList.toggle("hide", anyMatch);
            noResult.classList.toggle("unhide", !anyMatch)
        } else {
            searchCard.forEach(elem => {
                elem.classList.remove('hide');
                document.querySelector("#idShowMore").classList.remove('hide')
            })
        }
    }
}

export {
    Search,
    SearchLike
}