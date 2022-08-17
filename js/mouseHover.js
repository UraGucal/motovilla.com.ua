const shopping__cart__desctop = document.querySelector('.shopping__cart__desctop');
const header =  document.querySelector('.header');
const cartWrappContent = document.querySelector('.cart__content__wrapp');
const addOverlay = document.querySelector('.cart__window__dark__overlay');
const cart__tittle = document.querySelector('.cart__tittle');
const body = document.querySelector('body');
shopping__cart__desctop.onmouseenter = () => {
    cartWrappContent.style.display = 'flex'; 
    addOverlay.style.display = 'flex';
    body.style.overflowX = 'auto !important';
}
shopping__cart__desctop.onmouseleave = () => {
    cartWrappContent.style.display = 'none'; 
    addOverlay.style.display = 'none';
    body.style.overflow = 'visible';
}


