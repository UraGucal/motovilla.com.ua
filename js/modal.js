const btn__modal = document.getElementById("btn__modal");
const close__modal = document.getElementById("close");
btn__modal.onclick = function(){
  modal.style.display = "flex";
  document.body.style.overflowX = 'auto !important';
}
close__modal.onclick = function(){
  modal.style.display = "none";
  document.body.style.overflow = "visible"; 
}

