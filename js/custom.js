//------------- Mobile Hedaer js
const mobile_nav = document.querySelector(".menu-bar");
const nav_header = document.querySelector(".header");
const togglenavbar = () => {
    nav_header.classList.toggle("active");
};
mobile_nav.addEventListener('click', () => togglenavbar());
//----- Home page Banner slider
function autoSlider() {
  let currentIndex = 0;
  const sliderElements = document.querySelectorAll('.slider--el');
  const totalElements = sliderElements.length;

  function showSlide(index) {
    // Hide all slider elements
    for (let i = 0; i < totalElements; i++) {
      sliderElements[i].style.display = '';
    }
    // Show the selected slide
    sliderElements[index].style.display = 'block';
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalElements;
    showSlide(currentIndex);
  }

  // Show the initial slide
  showSlide(currentIndex);

  // Automatically change slides every 5 seconds (adjust this value as desired)
  setInterval(nextSlide, 0);
}

// Call the autoSlider function when the page loads
window.onload = autoSlider;
document.addEventListener('DOMContentLoaded', function () {
  let currentSlide = 1;
  const totalSlides = 4; // Change this value to the total number of slides

  function showSlide(index) {
    const pageInput = document.getElementById(`page${index}`);
    pageInput.checked = true;
  }

  function nextSlide() {
    currentSlide = (currentSlide % totalSlides) + 1;
    showSlide(currentSlide);
  }

  //--------- Change slides every 5 seconds (adjust this value as desired)
  setInterval(nextSlide, 2000);
});

//----------- filpslider Our Clients

$('.mission-slider').slick({
  slidesToShow: 1,
  dots: false,
  slidesToScroll: 1,
  // autoplay: true,
  dots:true,
});