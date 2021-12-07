 'use strict';
console.clear;
console.log (
    '%c%s',
    'color: green; font-size: 18px; line-height: 1em;',
    "Console was cleared"
);

const htmlTag = document.querySelector('html');
const bodyTag = document.querySelector('body');

const header = document.querySelector(".header");
const headerMenu = document.querySelector(".header__menu");
const menuButton = document.querySelector(".menu-button");

const accountButton = document.querySelector(".account-button");
const modalAccount = document.querySelector(".modal-wrapper");
const modalAccountCloseButton = document.querySelector(".modal__exit-button");


window.addEventListener('load', () => {
    changeHeaderMenu();
});

window.addEventListener('resize', () => {
    changeHeaderMenu();
});

function changeHeaderMenu() {
    if (window.innerWidth < 1040) {
        changeToMobileMenu();
    } else {
        changeToDesktopMenu();
        unlockScroll();
    }
};
function changeToMobileMenu() {
    headerMenu.classList.remove("js-desktop");
    headerMenu.classList.add("js-mobile","js-closed");
    menuButton.classList.remove("js-hidden");
}

function changeToDesktopMenu() {
    headerMenu.classList.remove("js-mobile","js-closed","js-opened");
    headerMenu.classList.add("js-desktop");
    menuButton.classList.add("js-hidden");
}

menuButton.addEventListener('click', () => {
    if (headerMenu.classList.contains("js-closed")) {
        OpenMobileMenu();
        lockScroll();
    } else {
        CloseMobileMenu();
        unlockScroll();
    }
});
function OpenMobileMenu() {
    if (headerMenu.classList.contains("js-closed")) {
        headerMenu.classList.remove("js-closed");
        headerMenu.classList.add("js-opened");
        menuButton.classList.add("js-opened")
    }
}
function CloseMobileMenu() {
    if (headerMenu.classList.contains("js-opened")) {
        headerMenu.classList.add("js-closed");
        headerMenu.classList.remove("js-opened");
        menuButton.classList.remove("js-opened")
    }
}


function addDivForWidthScroll() {
    let div = document.createElement('div');
    div.classList.add('js-calculate-scroll-width');
    div.style.position = 'fixed';
    div.style.top = '0px';
    div.style.visibility = 'hidden';
    div.style.width = '30px';
    div.style.height = '30px';
    div.style.overflowY = 'scroll';
    document.body.appendChild(div);
}
addDivForWidthScroll();

function widthScroll() {
    const div = document.querySelector('.js-calculate-scroll-width');
    return div.offsetWidth - div.clientWidth;;
}

function lockScroll() {
    const scrollWidth = widthScroll();
    htmlTag.style.overflowY = 'hidden';
    header.style.width = `calc(100% - ${scrollWidth}px)`;
    bodyTag.style.marginRight = scrollWidth + 'px';
}
function unlockScroll() {
    htmlTag.style.overflowY = '';
    header.style.width = '';
    bodyTag.style.marginRight = '';
}


accountButton.addEventListener('click', () => {
    CloseMobileMenu();
    showModalAccount();
    lockScroll();
});
modalAccountCloseButton.addEventListener('click', () => {
    hideModalAccount();
    unlockScroll();
});

function showModalAccount() {
    modalAccount.classList.remove("js-hidden")
}
function hideModalAccount() {
    modalAccount.classList.add("js-hidden")
}




