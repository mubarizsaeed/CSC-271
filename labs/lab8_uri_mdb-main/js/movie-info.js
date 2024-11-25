const movieInfo = [
    'Inception',
    'img/inception.jpg',
    5,
    'A skilled thief enters the dreams of others to steal their secrets, but an important mission requires him to do the impossible: plant an idea into someone\'s mind.'
 ];
 
 const movieImage = document.querySelector('.movie-image');
 movieImage.src = movieInfo[1];
 movieImage.alt = movieInfo[0];
 
 const movieName = document.querySelector('#movie-name');
 movieName.textContent = movieInfo[0];
 
 const movieDesc = document.querySelector('.movie-info p');
 movieDesc.textContent = movieInfo[3];
 
 const rating = document.querySelector('.rating');
 let stars = '';
 for(let i = 0; i < 5; i++) {
    if(i < movieInfo[2]) {
        stars += '★';
    } else {
            stars += '☆';
    }
 }
 rating.textContent = stars;