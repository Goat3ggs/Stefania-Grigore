const burerBtn = document.querySelector(".header__burger");
const nav = document.querySelector(".nav");
const iconOpen = document.querySelector(".header__burger--open");
const iconClose = document.querySelector(".header__burger--close");
const navLinks = document.querySelectorAll(".nav__link");
const header = document.querySelector(".header");

burerBtn.addEventListener("click", () => {
    nav.classList.toggle("nav--hidden");
    iconOpen.classList.toggle("u-hidden");
    iconClose.classList.toggle("u-hidden");

    document.documentElement.classList.toggle("u-no-scroll"); 
    document.body.classList.toggle("u-no-scroll");
});

navLinks.forEach((el) => {
    el.addEventListener("click", () => {
        nav.classList.add("nav--hidden");
        iconClose.classList.add("u-hidden");
        iconOpen.classList.remove("u-hidden");

        document.documentElement.classList.remove("u-no-scroll"); 
        document.body.classList.remove("u-no-scroll");
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("header--sticky");
    } else {
        header.classList.remove("header--sticky");
    }
});