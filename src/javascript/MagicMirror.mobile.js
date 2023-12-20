function startup() {
  const el = document.querySelector('.mask');
  el.addEventListener("touchmove", handleMove);
}

document.addEventListener("DOMContentLoaded", startup);

function handleMove(evt) {
  evt.preventDefault();
  const $mask = document.querySelector('.mask');
  const $uncensor = document.querySelector('.uncensor');

  const { clientWidth, clientHeight } = $uncensor;

  const touches = evt.changedTouches;

  $mask.style.top = `${touches[0].pageY - clientHeight / 2}px`;
  $mask.style.left = `${touches[0].pageX - clientWidth / 2}px`;
}