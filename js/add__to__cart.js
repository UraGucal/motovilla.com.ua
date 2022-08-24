buy__list = document.querySelector('.buy__list');
window.addEventListener('click', function(event){
    if(event.target.hasAttribute('data-cart')){
      const add__card__overlay__wrap = document.querySelector('.add__card__overlay__wrap');
      add__card__overlay__wrap.style.display = 'flex';
      body.style.overflowX = 'auto !important';
      const continue__btn = document.getElementById('continue__btn');
      continue__btn.onclick = () => {
        add__card__overlay__wrap.style.display = 'none';
        body.style.overflow = 'visible';
      }
        const cardParent = event.target.closest('.product__card'); //Находим родителя кнопки по которой
        const productInfo = {   //собираем все в обьект
              id: cardParent.dataset.id,
              imgSrc:  cardParent.querySelector('.product__image').getAttribute('src'),
              tittle:  cardParent.querySelector('.woocomerce__loop__product__tittle').innerText,
              counter: cardParent.querySelector('[data-counter]').innerText,
              price: cardParent.querySelector('.price').innerText,
        }
        const cartItemHtml = `
        <li class="product__card " data-id="${productInfo.id}">
            <a class="woocomerce__loop__product__link" href="##">
              <img class="product__image w-100" src="${productInfo.imgSrc}" alt="">
            </a>
        <div class="woocomerce__loop__product__tittle">${productInfo.tittle}</div>
        <span class="price__wrapp">
          <p class="price">${productInfo.price}</p>
        </span>
        <div class="amount">
          <span class="amount__discription">Кол-во</span>
          <div class="amount__btn__group">
            <button type="button" class="minus" data-action="minus">-</button>
            <output class="result" data-counter>${productInfo.counter}</output>
            <button data-cart type="button" class="plus" data-action="plus">+</button>
            <i class="fa-solid fa-cart-arrow-down" id="remove__card"></i>
          </div>
        </div>
      </li>
        `;
    buy__list.insertAdjacentHTML('beforeend', cartItemHtml);
    }
});
