import { changeViewClassForAllCards, getViewClassOfActiveItem } from './utils.js';

const switches = document.querySelector('.switches');

let activeItem = switches.querySelector(`.${getViewClassOfActiveItem()}`);

if (activeItem) {
  activeItem.querySelector('path').classList.add('switcher--active');
}

switches.addEventListener('click', (event) => {
  const target = event.target.closest('svg');

  if (target && target.tagName === 'svg') {
    const pathOfActive = activeItem ? activeItem.querySelector('path') : null;

    if (pathOfActive) {
      pathOfActive.classList.remove('switcher--active');
    }

    target.querySelector('path').classList.add('switcher--active');

    const classOfTarget = target.classList[1];

    localStorage.setItem('switcher', JSON.stringify(classOfTarget));
    activeItem = switches.querySelector(`.${classOfTarget}`);

    changeViewClassForAllCards();
  }
});
