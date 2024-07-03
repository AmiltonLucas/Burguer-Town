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

let cart = [];
const cartButton = document.querySelector(".cart-button");
const cartOverlay = document.getElementById("cartOverlay");
const cartItemsContainer = document.getElementById("cartItems");
const cartTotalElement = document.getElementById("cartTotal");
const closeCartButton = document.querySelector(".close-cart");
const closeCartXButton = document.querySelector(".close-cart-x");

function addToCart(product) {
  const item = cart.find((cartItem) => cartItem.name === product.name);
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({
      name: product.name,
      price: parseFloat(product.price),
      quantity: 1,
    });
  }
  updateCart();
}

function updateCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
            <span>${item.name}</span>
            <div class="quantity-buttons">
                <button onclick="changeQuantity('${item.name}', -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="changeQuantity('${item.name}', 1)">+</button>
            </div>
            <span>R$ ${itemTotal.toFixed(2)}</span>
        `;
    cartItemsContainer.appendChild(cartItem);
  });
  cartTotalElement.textContent = total.toFixed(2);
}

function changeQuantity(name, amount) {
  const item = cart.find((cartItem) => cartItem.name === name);
  if (item) {
    item.quantity += amount;
    if (item.quantity <= 0) {
      cart = cart.filter((cartItem) => cartItem.name !== name);
    }
    updateCart();
  }
}

document.querySelectorAll(".product button").forEach((button) => {
  button.addEventListener("click", (e) => {
    const productName = e.target.dataset.name;
    const productPrice = e.target.dataset.price;
    addToCart({ name: productName, price: productPrice });
  });
});

cartButton.addEventListener("click", () => {
  cartOverlay.style.display = "flex";
});

closeCartButton.addEventListener("click", () => {
  cartOverlay.style.display = "none";
});

closeCartXButton.addEventListener("click", () => {
  cartOverlay.style.display = "none";
});

cartOverlay.addEventListener("click", (e) => {
  if (e.target === cartOverlay) {
    cartOverlay.style.display = "none";
  }
});
