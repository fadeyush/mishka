import './scss/style.scss';

function showNav() {
    const navToggle = document.querySelector(".main-nav__button");
    const navMain = document.querySelector(".page-header__main-nav");

    navToggle.addEventListener("click", function () {
        if (navMain.classList.contains("main-nav--closed")) {
            navMain.classList.remove("main-nav--closed");
            navMain.classList.add("main-nav--opened");
        } else {
            navMain.classList.add("main-nav--closed");
            navMain.classList.remove("main-nav--opened");
        }
    })
}

showNav();