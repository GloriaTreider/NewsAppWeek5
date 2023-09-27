const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

async function fetchNews() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // TODO: Add a function call to display the news
    displayNews(data.articles);
  } catch (error) {
    console.error('There was an error!', error);
  }
}

fetchNews();

function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    for (const article of articles) {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'card mb-3'; // Add Bootstrap card class

        // Create a card body for the article
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        //create and append a headline to the articleDiv card body
        const title = document.createElement('h4');
        title.className = 'card-title'; // Add Bootstrap card title class
        title.textContent = article.title;
        cardBody.appendChild(title);
    
      // TODO: Use document.createElement and appendChild to create and append more elements

      // Create and append a description to the card body
        const description = document.createElement('p');
        description.className = 'card-text'; // Add Bootstrap card text class
        description.textContent = article.description;
        cardBody.appendChild(description);

        // Create and append a link to the full article
        const link = document.createElement('a');
        link.className = 'btn btn-primary'; // Add Bootstrap button class
        link.href = article.url;
        link.textContent = 'Read More';
        cardBody.appendChild(link);

        // Append the card body to the article div
        articleDiv.appendChild(cardBody);
  
      newsDiv.appendChild(articleDiv);
    }
}
