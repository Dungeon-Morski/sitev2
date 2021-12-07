'use strict';
const sliderBlock = document.querySelector('.sport-tips-slider');

const sliderButtonsBlock = document.querySelector('.slider-buttons-container');
const sliderButtons = sliderButtonsBlock.querySelectorAll('.slider-buttons');

const slidesBlock = document.querySelector('.slides');
const slideWrapperBlock = document.querySelector('.slide-wrapper');
const slideWrappers = document.querySelectorAll('.slide-wrapper');
const slideWrappersArray = Array.prototype.slice.call(slideWrappers);


const slidesNumber = document.querySelectorAll('.slide-wrapper').length;
let slidesOnScreen = Math.round(slidesBlock.clientWidth / slideWrapperBlock.clientWidth);

window.addEventListener('load', () => {
    loadSlider();
    addEventSliderMainButtons();
});

function loadSlider() {
    slideWrappersArray.forEach( slide => {
        let index = slideWrappersArray.indexOf(slide);
        let slideWrapperWidth = slideWrappers[0].clientWidth;
        slide.style.left = `${index * 100 /slidesOnScreen}%`;
    });
}
let index = 0;
function addEventSliderMainButtons() {
    sliderButtons[0].addEventListener('click', () => {
        if (index > 0) {
            moveSlides(--index);
        }
    });
    sliderButtons[1].addEventListener('click', () => {
        if (index < Math.ceil((slidesNumber - 1) / slidesOnScreen)) {
            moveSlides(++index);
        }
    });
}
function moveSlides(Num) {
    slidesBlock.style.transform = `translateX(${Num * -100/slidesOnScreen}%)`;
}
