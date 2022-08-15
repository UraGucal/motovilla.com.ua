buy__list = document.querySelector('.buy__list');
window.addEventListener('click', function(event){
    if(event.target.hasAttribute('data-cart')){
       const div = document.createElement('div');
       div.classList.add('ModalSuccessfulAddition');
       const product__card__wrap = document.querySelector('.product__card__wrap');
       product__card__wrap.appendChild(div);
        const cardParent = event.target.closest('.product__card'); //Находим родителя кнопки по которой
        const productInfo = {   //собираем все в обьект
              id: cardParent.dataset.id,
              imgSrc:  cardParent.querySelector('.product__image').getAttribute('src'),
              tittle:  cardParent.querySelector('.woocomerce__loop__product__tittle').innerText,
              counter: cardParent.querySelector('[data-counter]').innerText,
        }
        const cartItemHtml = `
        <li class="product__card col-6 col-sm-4 col-md-4 col-lg-3" data-id="${productInfo.id}">
            <a class="woocomerce__loop__product__link" href="##">
            <img class="product__image w-100" src="${productInfo.imgSrc}" alt="">
            </a>
        <div class="woocomerce__loop__product__tittle">${productInfo.tittle}</div>
        <span class="price bg-dark d-flex justify-content-center">
          <span class="woocomerce__price__amount d-flex">
            <p class="text-light m-0">Цена _   </p>
            <bdi class="text-warning">
               634 грн
            </bdi>
          </span>
        </span>
        <div class="amount">
          <span class="amount__discription">Кол-во</span>
          <div class="amount__btn__group">
            <button type="button" class="minus" data-action="minus">-</button>
            <output class="result" data-counter>${productInfo.counter}</output>
            <button data-cart type="button" class="plus" data-action="plus">+</button>
          </div>
        </div>
      </li>
        `;
    buy__list.insertAdjacentHTML('beforeend', cartItemHtml);
    }
});
