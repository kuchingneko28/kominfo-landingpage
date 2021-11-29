const navbar = document.querySelector(".navbar");
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-link");

// Check click
burger.addEventListener("click", () => {
  burger.classList.toggle("toggle");
  navMenu.classList.toggle("nav-active");
});
