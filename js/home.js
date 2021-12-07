'use strict';
const sliderBlock = document.querySelector('.slider');

const sliderButtonsBlock = document.querySelector('.slider-buttons');
const sliderButtons = sliderButtonsBlock.querySelectorAll('span');


const slidesBlock = document.querySelector('.slides');

const slidesButtonsBlock = document.querySelector('.slides-buttons');
const slidesButtons = [];
const slideWrapperBlock = document.querySelector('.slide-wrapper');
const slidesNumber = document.querySelectorAll('.slide').length;



let slidesOnScreen = Math.round(slidesBlock.clientWidth / slideWrapperBlock.clientWidth);
let slidesGroupsNumber = Math.ceil(slidesNumber / slidesOnScreen);

window.addEventListener('load', () => {
    calculateSlider();
    addEventSliderButton();
    addEventSliderMainButtons();
});

function calculateSlider() {
    for (let i = 1; i <= slidesGroupsNumber; i++) {
        const li = document.createElement('li');
        slidesButtonsBlock.appendChild(li);
        slidesButtons.push(li);
    }
    slidesButtonsBlock.firstChild.classList.add('js-button_active');
};
function addEventSliderButton() {
    slidesButtons.forEach( button => {
        button.addEventListener('click', () => {
            let index = slidesButtons.indexOf(button);
            moveSlides(index);
        });
    });
}




window.addEventListener('resize', () => {
    checkSlider();
});
function checkSlider() {
    let slidesOnScreenNew = Math.round(slidesBlock.clientWidth / slideWrapperBlock.clientWidth);
    if (slidesOnScreen == slidesOnScreenNew) {return;}

    let slidesGroupsNumberNew = Math.ceil(slidesNumber / slidesOnScreenNew);
    
    if (slidesGroupsNumberNew < slidesGroupsNumber) {
        let activeSlide = document.querySelector('.js-button_active');
        let aciveIndex = slidesButtons.indexOf(activeSlide);

        for (let i = 1; i <= slidesGroupsNumber - slidesGroupsNumberNew; i++) {
            slidesButtonsBlock.removeChild(slidesButtonsBlock.lastChild);   
            slidesButtons.pop();
        }
        slidesGroupsNumber = slidesGroupsNumberNew;

        let lastIndex = slidesButtons.length - 1;
        if ( aciveIndex >= lastIndex) {
            slidesButtons[lastIndex].classList.add('js-button_active');
            moveSlides(lastIndex);
        }
    } else {
        for (let i = 1; i <= slidesGroupsNumberNew - slidesGroupsNumber; i++) {
            const li = document.createElement('li');
            slidesButtonsBlock.appendChild(li);
            slidesButtons.push(li);
        }
        slidesGroupsNumber = slidesGroupsNumberNew;
        addEventSliderButton();
    }
    slidesOnScreen = slidesOnScreenNew;
}

function addEventSliderButton() {
    slidesButtons.forEach( button => {
        button.addEventListener('click', () => {
            let index = slidesButtons.indexOf(button);
            let activeSlide = document.querySelector('.js-button_active');
            if (button != activeSlide) {
                activeSlide.classList.remove('js-button_active');
                button.classList.add('js-button_active');
                moveSlides(index);
            }
        });
    });
}

function addEventSliderMainButtons() {
    sliderButtons[0].addEventListener('click', () => {
        let activeSlide = document.querySelector('.js-button_active');
        let aciveIndex = slidesButtons.indexOf(activeSlide);
        let newIndex = aciveIndex - 1;
        slidesButtons[aciveIndex].classList.remove('js-button_active');
        slidesButtons[newIndex].classList.add('js-button_active');
        moveSlides(newIndex);
    });
    sliderButtons[1].addEventListener('click', () => {
        let activeSlide = document.querySelector('.js-button_active');
        let aciveIndex = slidesButtons.indexOf(activeSlide);
        let newIndex = aciveIndex + 1;
        slidesButtons[aciveIndex].classList.remove('js-button_active');
        slidesButtons[newIndex].classList.add('js-button_active');
        moveSlides(newIndex);
    });
}
function moveSlides(Num) {
    slidesBlock.style.transform = `translateX(${Num * -100}%)`;
    checkSliderButtons();
}
function checkSliderButtons() {
    let activeSlide = document.querySelector('.js-button_active');
    let aciveIndex = slidesButtons.indexOf(activeSlide);
    if (aciveIndex == 0) {
        sliderButtons[0].classList.add('js-button_disabled');
    } else {
        sliderButtons[0].classList.remove('js-button_disabled');
    };
    if (aciveIndex == slidesButtons.length - 1) {
        sliderButtons[1].classList.add('js-button_disabled');
    } else {
        sliderButtons[1].classList.remove('js-button_disabled');
    };
}