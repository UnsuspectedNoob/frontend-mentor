let rating = 1;

const rates = document.querySelectorAll(".rate");
for (let rate of rates) {
  rate.addEventListener("click", () => {
    rate.classList.toggle("active");
  });
}

function setActive() {
  for (let rate of rates) {
    rate.classList.remove("active");
  }
}

const card = document.querySelector('.card');
const thankYou = document.querySelector('.thank-you-card');
const rate = document.getElementById('rate-number');

thankYou.classList.add('none');

function submitRating() {
  let active = document.querySelector(".active");
  rating = Number(active.innerHTML);
  console.log(rating);
  card.classList.add('none');
  thankYou.classList.remove('none');
  rate.innerHTML = rating;
}
