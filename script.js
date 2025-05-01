let current = 0;
const items = document.querySelectorAll('.carousel-item');
const total = items.length;

function cycleSlides() {
  items.forEach((item, index) => {
    item.classList.remove('active');
  });
  current = (current + 1) % total;
  items[current].classList.add('active');
}

// Initialize first slide
items[0].classList.add('active');

// Auto cycle every 3 seconds
setInterval(cycleSlides, 3000);
