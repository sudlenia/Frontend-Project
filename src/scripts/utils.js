export function createArticleHTML(article) {
  const articleInfo = {
    title: article.title ? (article.title.rendered ? article.title.rendered : article.title) : article.title,
    img: article.jetpack_featured_media_url ? article.jetpack_featured_media_url : article.img,
    descr: article.excerpt
      ? article.excerpt.rendered
        ? article.excerpt.rendered.replace(/<\/?p>/g, '')
        : article.descr
      : article.descr,
    date: article.date ? article.date : new Date(),
  };

  const card = document.createElement('article');
  card.classList.add('card');
  card.classList.add('articles__card');

  const card__img = document.createElement('img');
  card__img.classList.add('card__img');
  card__img.src = articleInfo.img;

  const card__content = document.createElement('div');
  card__content.classList.add('card__content');

  const card__title = document.createElement('h3');
  card__title.classList.add('card__title');
  card__title.textContent = articleInfo.title;

  const card__text = document.createElement('p');
  card__text.classList.add('card__text');
  card__text.innerHTML = articleInfo.descr;

  const card__footer = document.createElement('footer');
  card__footer.classList.add('card__footer');

  const formattedDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(
    new Date(`${articleInfo.date}`),
  );

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  card__footer.textContent = `${formattedDate} · ${getRandomNumber(1, 15)} min read`;

  card__content.append(card__title, card__text, card__footer);
  card.append(card__img, card__content);

  return card.outerHTML;
}

export function addRowViewClassForCard(card) {
  card.classList.add('articles__card--row');
  card.querySelector('.card__img').classList.add('card__img--row');
}

function removeRowViewClassForCard(card) {
  card.classList.remove('articles__card--row');
  card.querySelector('.card__img').classList.remove('card__img--row');
}

export function changeViewClassForAllCards() {
  const allCards = document.querySelectorAll('.articles__content article');

  allCards.forEach((element) => {
    if (getViewClassOfActiveItem() === 'switcher--row') {
      addRowViewClassForCard(element);
    } else {
      removeRowViewClassForCard(element);
    }
  });
}

export function getViewClassOfActiveItem() {
  const classOfActiveItem = localStorage.getItem('switcher')
    ? JSON.parse(localStorage.getItem('switcher'))
    : 'switcher--grid';

  return classOfActiveItem;
}
