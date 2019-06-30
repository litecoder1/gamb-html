
new fullpage("#fullpage", {
  navigation: true,
  verticalCentered: false
});

const openMobileMenuBtn = document.querySelector(".header__menuBtn");
const closeMobileMenuBtn = document.querySelector(".mobileMenu__closeBtn");
const mobileMenu = document.querySelector(".mobileMenu");

openMobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("isActive");
});

closeMobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("isActive");
});

$("#career-tabs").tabs();
$("#tabs").tabs();
