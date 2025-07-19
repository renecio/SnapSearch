const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const results = document.getElementById('results');

const ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY'; // Replace this

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = input.value.trim();
  if (!query) return;

  results.innerHTML = '<p>Loading...</p>';

  const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`);
  const data = await res.json();

  results.innerHTML = data.results
    .map(photo => `<img src="${photo.urls.small}" alt="${photo.alt_description}" />`)
    .join('');
});
