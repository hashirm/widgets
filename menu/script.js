const mobileIcon = document.querySelector("nav .mobile-img-icon");
const navbar = document.querySelector(".navbar nav");
mobileIcon.addEventListener("ontoggle", (e) => {
  e.preventDefault();
  navbar.style.height = "179px";
});
