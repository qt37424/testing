const debounce = (callback, wait) => {
  let timer = null;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(
      () => callback.apply(null, args), 
      wait,
    );
  };
};

const $mask = document.querySelector('.mask');
const $uncensor = document.querySelector('.uncensor');
let isMoving = false;

const { clientWidth, clientHeight } = $uncensor;

const handleMouseMove = debounce(
  (event) => {
    if (isMoving) {
      $mask.style.top = `${event.y - clientHeight / 2}px`;
      $mask.style.left = `${event.x - clientWidth / 2}px`;
    }
  },
  10
)

const handleMouseDown = debounce(
  (event) => {
    isMoving = true;
  },
  10
)

const handleMouseUp = debounce(
  (event) => {
    isMoving = false;
  },
  10
)

document.addEventListener(
  'mousemove',
  handleMouseMove,
)

document.addEventListener(
  'mousedown',
  handleMouseDown,
)

document.addEventListener(
  'mouseup',
  handleMouseUp,
)