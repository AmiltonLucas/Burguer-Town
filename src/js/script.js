document.addEventListener("DOMContentLoaded", function () {
  const offcanvasNavbar = document.getElementById("offcanvasNavbar");
  const navLinks = offcanvasNavbar.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasNavbar);
      offcanvas.hide();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarNav = document.getElementById("navbarNav");
  const navLinks = navbarNav.querySelectorAll(".nav-link");
  const navbarToggler = document.querySelector(".navbar-toggler");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Verifica se o menu colapsável está visível (aberto)
      if (navbarToggler.getAttribute("aria-expanded") === "true") {
        const collapseElement = new bootstrap.Collapse(navbarNav);
        collapseElement.hide();
      }
    });
  });
});

const cardContainer = document.querySelector('.cardContainer');
const cards = document.querySelectorAll('.cardProducts');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

const updateView = () => {
    const translateX = -currentIndex * 100;
    cardContainer.style.transform = `translateX(${translateX}%)`;
};

nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateView();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = cards.length - 1;
    }
    updateView();
});

// Inicializa a visão
updateView();
