const shopping__card__counter = document.querySelector('.shoping__card__counter');
let counter = 0;
window.addEventListener('click', (event) => {  //слушаем событие клик Ивент
    //Если елемент по которому кликнули являеться plus или minus
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus' ){
        const amountParents = event.target.closest('.product__card'); //находим родителя
        counter = amountParents.querySelector('[data-counter]'); //находим счетчик
    }

    if(event.target.dataset.action === 'plus') { //Если событие по которому кликнули его дата-атрибут со значением;
        counter.innerText = ++counter.innerText;
        shopping__card__counter.innerText++;
    }
    if( event.target.dataset.action === 'minus' & counter.innerText > 1) {
        counter.innerText = --counter.innerText;
        shopping__card__counter.innerText--;
    }
    // ********************************************************************

});



    




 