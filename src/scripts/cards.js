import { getArticles } from './requests.js';
import { changeClassOfCards, getClassOfActiveItem, createArticleHTML } from './utils.js';

const articles__content = document.querySelector('.articles__content');

getArticles().then(renderArticles);

function renderArticles(data) {
  articles__content.innerHTML = data
    .slice(0, 6)
    .map((article) => createArticleHTML(article))
    .join('');

  changeClassOfCards(getClassOfActiveItem());
}
