
const modal__input__searching = document.querySelector('.input__search');
modal__input__searching.onmouseenter = () =>{
    modal__input__searching.classList.add('input__modal__styles');
    const form__wrapper = document.querySelector('.form__wrapper');
    form__wrapper.classList.add('form__wrapper__absolut__for__search');
    const btn__search = document.querySelector('.btn__search');
    btn__search.style.width = '10'+'%'; 
    const form__search = document.querySelector('.form__search');
    form__search.classList.add('form__search__modal__style')
}


