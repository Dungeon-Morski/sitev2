
'use strict';
console.clear;
console.log (
    '%c%s',
    'color: green; font-size: 18px; line-height: 1em;',
    "OH, Hello there... and get out of here!"
)

let menuButton = document.querySelector(".menu__button");
let navigation = document.querySelector(".header__nav");
let accountButton = document.querySelector(".personal__account");
let wrapperContent = document.querySelector(".wrapper__main .container");
window.onload = function () {
    changeHeader();
    changeWrapper();
};

window.onresize = function() {
    changeHeader();
    changeWrapper();
};

menuButton.onclick = function() {
    if (navigation.classList.contains("nav_closed")) {
        navigation.classList.remove("nav_closed");
        navigation.classList.add("nav_opened");
        menuButton.classList.add("menu__button_opened")
    } else {
        navigation.classList.remove("nav_opened");
        navigation.classList.add("nav_closed");
        menuButton.classList.remove("menu__button_opened")
    }
}
function changeWrapper() {
    if (window.innerWidth < 930 || window.innerWidth < window.innerHeight) {
        wrapperContent.classList.add("wrapper__mobile");
    } else {
        wrapperContent.classList.remove("wrapper__mobile");
    }
}
function changeHeader() {
    if (window.innerWidth < 930) {
        menuButton.classList.remove("display_none");
        navigation.classList.add("nav_mobile", "nav_closed");
    } else {
        menuButton.classList.add("display_none");
        navigation.classList.remove("nav_mobile");
        navigation.classList.remove("nav_closed");
        navigation.classList.remove("nav_opened");
        menuButton.classList.remove("menu__button_opened");
    }
};



