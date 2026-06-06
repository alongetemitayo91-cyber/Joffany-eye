// Mobile Menu Toggle
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

// Initialize Swiper Slider
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// ================== Prevent Past Dates in Appointment Form ==================
document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("preferred_date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }
});

// ================== Handle Form Submission and Redirect ==================
function handleFormSubmit(event) {
  // Allow form to submit normally, but set up redirect
  setTimeout(function () {
    window.location.href = "thankyou.html";
  }, 1000); // 1 second delay to allow form to process
}
