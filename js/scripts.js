document.addEventListener("DOMContentLoaded", function() {
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const productCarousel = document.querySelector('.product-carousel');

  let currentIndex = 0;

  // Manual navigation - Next
  nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % document.querySelectorAll('.product-slide').length;
    updateCarousel();
  });

  // Manual navigation - Previous
  prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + document.querySelectorAll('.product-slide').length) % document.querySelectorAll('.product-slide').length;
    updateCarousel();
  });

  // Automatic rotation
  setInterval(function() {
    currentIndex = (currentIndex + 1) % document.querySelectorAll('.product-slide').length;
    updateCarousel();
  }, 2000); // Set the rotation interval in milliseconds

  // Update the carousel based on the current index
  function updateCarousel() {
    const translateValue = -currentIndex * 100 + '%';
    productCarousel.style.transform = 'translateX(' + translateValue + ')';
  }
});
