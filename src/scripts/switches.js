import { changeViewClassForAllCards, getDataViewOfActiveItem } from './utils.js';

const switches = document.querySelector('.switches');

let activeItem = switches.querySelector(`[data-view="${getDataViewOfActiveItem()}"]`);

if (activeItem) {
  activeItem.classList.add('switches__btn--active');
}

switches.addEventListener('click', (event) => {
  const target = event.target.closest('BUTTON');

  if (target && target.tagName === 'BUTTON') {
    if (activeItem) {
      activeItem.classList.remove('switches__btn--active');
    }

    target.classList.add('switches__btn--active');

    const viewOfTarget = target.dataset.view;

    localStorage.setItem('switch-view', viewOfTarget);
    activeItem = switches.querySelector(`[data-view="${viewOfTarget}"]`);

    changeViewClassForAllCards();
  }
});
