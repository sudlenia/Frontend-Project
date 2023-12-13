export function createArticleHTML(article) {
  const card = document.createElement('article');
  card.classList.add('card');
  card.classList.add('articles__card');

  const card__img = document.createElement('img');
  card__img.classList.add('card__img');
  card__img.src = article.jetpack_featured_media_url;

  const card__content = document.createElement('div');
  card__content.classList.add('card__content');

  const card__title = document.createElement('h3');
  card__title.classList.add('card__title');
  card__title.textContent = article.title.rendered;

  const card__text = document.createElement('p');
  card__text.classList.add('card__text');
  card__text.innerHTML = article.excerpt.rendered.replace(/<\/?p>/g, '');

  const card__footer = document.createElement('footer');
  card__footer.classList.add('card__footer');

  const formattedDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(
    new Date(`${article.date}`),
  );

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  card__footer.textContent = `${formattedDate} · ${getRandomNumber(1, 15)} min read`;

  card__content.append(card__title, card__text, card__footer);
  card.append(card__img, card__content);

  return card.outerHTML;
}

export function changeClassOfCards(classOfCards) {
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

export function getClassOfActiveItem() {
  let classOfActiveItem = localStorage.getItem('switcher')
    ? JSON.parse(localStorage.getItem('switcher'))
    : 'switcher--grid';

  return classOfActiveItem;
}
