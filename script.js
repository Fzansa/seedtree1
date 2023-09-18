// Slider 
var multipleCardCarousel = document.querySelector("#carouselExampleControls");

if (window.matchMedia("(min-width: 576px)").matches) {
  var carouselInner = multipleCardCarousel.querySelector(".carousel-inner");
  var cardWidth = carouselInner.querySelector(".carousel-item").offsetWidth;
  var scrollPosition = 0;

  // Calculate the number of items to scroll (adjust as needed)
  var itemsToScroll = 1; // Change this as needed

  document.querySelector("#carouselExampleControls .carousel-control-next").addEventListener("click", function () {
    if (scrollPosition < carouselInner.scrollWidth - cardWidth * itemsToScroll) {
      scrollPosition += cardWidth * itemsToScroll;
      carouselInner.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  });

  document.querySelector("#carouselExampleControls .carousel-control-prev").addEventListener("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth * itemsToScroll;
      carouselInner.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  });
} else {
  multipleCardCarousel.classList.add("slide");
}

// End Slider



// Making toggle system
const carouselItems = document.querySelectorAll('.carousel-item');

carouselItems.forEach(item => {
  item.addEventListener('click', () => {
    // Toggle the 'active' class to expand/collapse
    carouselItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('collap');
      }
    });
    item.classList.toggle('collap');
  });
});
// Toggle syste end

// creating login system

// Function to make an item active
function makeActive(clickedItem) {
  // Remove the 'active' id from all <li> elements within userGuidenceRightContainer
  const allItems = document.querySelectorAll('.userGuidenceRightContainer li');
  allItems.forEach(item => {
    item.removeAttribute('id');
  });

  // Set the 'active' id to the clicked item
  clickedItem.id = 'active';

  // Hide all stepContainers
  const stepContainers = document.querySelectorAll('.stepContainer');
  stepContainers.forEach(container => {
    container.style.display = 'none';
  });

  // Show the stepContainer below the clicked item
  const stepContainer = clickedItem.nextElementSibling;
  if (stepContainer && stepContainer.classList.contains('stepContainer')) {
    stepContainer.style.display = 'block';
  }
}

// Set the first <li> element as active by default
const defaultActiveItem = document.getElementById('step1');
makeActive(defaultActiveItem);


// testimonial scroller

// Get the review container and scroll buttons
const reviewContainer = document.querySelector('.reviewContainer');
const scrollLeftButton = document.getElementById('scrollLeftButton');
const scrollRightButton = document.getElementById('scrollRightButton');

// Define the scroll amount
const scrollAmount = 380; // Adjust this value as needed

// Add event listener to the left scroll button
scrollLeftButton.addEventListener('click', () => {
  reviewContainer.scrollTo({
    left: reviewContainer.scrollLeft - scrollAmount,
    behavior: 'smooth' // Smooth scrolling
  });
});

// Add event listener to the right scroll button
scrollRightButton.addEventListener('click', () => {
  reviewContainer.scrollTo({
    left: reviewContainer.scrollLeft + scrollAmount,
    behavior: 'smooth' // Smooth scrolling
  });
});