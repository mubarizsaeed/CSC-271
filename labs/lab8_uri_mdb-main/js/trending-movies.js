const movieTitles = ['Inception', 'Into the Spider-Verse'];
const moviePosters = [
   'img/inception.jpg',
   'img/spiderverse.jpg'
];
const movieLinks = ['inception.html', 'spider-verse.html']; // will add partners link
const movieRatings = [5, 4];

const movieCards = document.querySelectorAll('.movie-card');

for(let i = 0; i < movieTitles.length; i++) {
   const card = movieCards[i];
   const img = card.querySelector('.movie-image');
   img.src = moviePosters[i];
   img.alt = movieTitles[i];
   const link = card.querySelector('.movie-link');
   link.href = movieLinks[i];
   link.textContent = movieTitles[i];
   const rating = card.querySelector('.rating');
   const stars = '★'.repeat(movieRatings[i]) + '☆'.repeat(5 - movieRatings[i]);
   rating.textContent = stars;
}