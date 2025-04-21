const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');

let currentSlide = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

// Next button functionality
nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
  updateCarousel();
});

// Previous button functionality
prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop back to the last slide
  updateCarousel();
});

// Auto-play functionality (change slide every 5 seconds)
let autoPlay = setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}, 5000);

// Reset auto-play on user interaction
nextButton.addEventListener('click', () => {
  clearInterval(autoPlay); // Stop auto-play
  autoPlay = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  }, 5000); // Restart auto-play after user clicks next
});

prevButton.addEventListener('click', () => {
  clearInterval(autoPlay); // Stop auto-play
  autoPlay = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  }, 5000); // Restart auto-play after user clicks prev
});
