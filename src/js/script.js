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