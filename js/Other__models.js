const btn_other_models = document.getElementById('btn__other__models');
const show__models = document.getElementById('show__models');
const main__show__btn__wrapp = document.getElementById('main__show__btn__wrapp')
btn_other_models.onclick = function(){
    show__models.style.display = "flex";
    btn_other_models.remove();
    main__show__btn__wrapp.remove(); 
}

