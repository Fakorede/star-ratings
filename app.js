// Initial Ratings
const ratings = {
  acetechng: 0.0,
  cregital: 0.0,
  anakle: 0.0,
  ckdigital: 0.0,
  dodo: 0.0
}

// Total Stars
const starsTotal = 5;

// Run getRatings when DOM loads
document.addEventListener('DOMContentLoaded', getRatings);

// Form Elements
const brandSelect = document.getElementById('brand-select');
const ratingControl = document.getElementById('rating-control');

// Init brand
let brand;

// Brand select change
brandSelect.addEventListener('change', (e) => {
  brand = e.target.value;
  // Enable rating ratingControl
  ratingControl.disabled = false;
  ratingControl.value = ratings[brand];
});

// Rating control change
ratingControl.addEventListener('blur', (e) => {
  const rating = e.target.value;

  // Make sure doesnt exceed 5
  if(rating > 5) {
    alert('Please rate 1 - 5');
    return;
  }

  // Change ratings
  ratings[brand] = rating;
  getRatings();//update rating
});

// Get ratings
function getRatings() {
  // loop through object, for-of is for arrays
  for(let rating in ratings) {
    // Get Percentage
    const starPercentage = (ratings[rating] / starsTotal) * 100;

    // Round to nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    // Set width of stars-inner to Percentage
    document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

    // Add number rating
    document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
  }
}
