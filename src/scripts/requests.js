const URLs = {
  articles: 'https://techcrunch.com/wp-json/wp/v2/posts',
};

async function fetchURL(url) {
  const response = await fetch(url);
  return response.json();
}

export async function getArticles() {
  return await fetchURL(URLs.articles);
}
