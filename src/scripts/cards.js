import { getArticles } from './requests.js';
import { changeViewClassForAllCards, createArticleHTML } from './utils.js';

const articles__content = document.querySelector('.articles__content');

getArticles().then(renderArticles);

function renderArticles(data) {
  const article_items = data.slice(0, 6).map((article) => createArticleHTML(article));
  articles__content.append(...article_items);

  changeViewClassForAllCards();
}
