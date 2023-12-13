const switches = document.querySelector('.switches');

let activeItem = switches.querySelector(`.${getClassOfActiveItem()}`);

if (activeItem) {
  activeItem.querySelector('path').classList.add('switcher--active');
  changeClassOfCards(getClassOfActiveItem());
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

    changeClassOfCards(classOfTarget);
  }
});

function changeClassOfCards(classOfCards) {
  const cards = document.querySelectorAll('.articles__content article');

  cards.forEach((element) => {
    if (classOfCards === 'switcher--row') {
      element.classList.add('articles__card--row');
      element.querySelector('.card__img').classList.add('card__img--row');
    } else {
      element.classList.remove('articles__card--row');
      element.querySelector('.card__img').classList.remove('card__img--row');
    }
  });
}

function getClassOfActiveItem() {
  let classOfActiveItem = localStorage.getItem('switcher')
    ? JSON.parse(localStorage.getItem('switcher'))
    : 'switcher--grid';

  return classOfActiveItem;
}
