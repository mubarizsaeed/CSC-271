const usernames = ['dude1', 'dude2', 'dude3'];
const dates = ['2024-03-15', '2024-03-20', '2024-03-25'];
const reviews = ['Mind-bending visuals .', 'Christopher Nolan at his best.', 'A masterpiece of modern cinema '];
const ratings = [5, 4, 5];

const cards = document.querySelectorAll('.review-card');

for(let i = 0; i < cards.length; i++) {
   let stars = '';
   for(let j = 0; j < 5; j++) {
       if(j < ratings[i]) {
           stars += '★';
       } else {
           stars += '☆';
       }
   }
   
   cards[i].querySelector('.review-rating').textContent = stars;
   cards[i].querySelector('.review-rating').setAttribute('rating', ratings[i]);
   cards[i].querySelector('p').textContent = usernames[i] + ' ' + dates[i];
   cards[i].querySelectorAll('p')[1].textContent = reviews[i];
}

const select = document.querySelector('select');
select.onchange = function() {
   for(let i = 0; i < cards.length; i++) {
       if(select.value === 'All' || cards[i].querySelector('.review-rating').getAttribute('rating') === select.value) {
           cards[i].style.display = 'block';
       } else {
           cards[i].style.display = 'none';
       }
   }
};