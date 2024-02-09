const mobileIcon = document.querySelector("nav .mobile-img-icon");
const navbar = document.querySelector(".navbar nav");
mobileIcon.addEventListener("click", (e) => {
  e.preventDefault();
  navbar.classList.toggle("nav-height");
});
