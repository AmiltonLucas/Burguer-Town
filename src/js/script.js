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

function updateProduct() {
  const litragem = document.getElementById("litragem").value;
  const image = document.getElementById("litragem-image");
  const price = document.getElementById("product-price");
  const button = document.getElementById("add-to-cart");

  let productName, productPrice, productImage;

  switch (litragem) {
    case "lata":
      productName = "Coca Cola 350ml";
      productPrice = "5.00";
      productImage = "src/images/products/coca-lata.png";
      break;
    case "600":
      productName = "Coca Cola 600ml";
      productPrice = "7.00";
      productImage = "src/images/products/coca-600.png";
      break;
    case "1l":
      productName = "Coca Cola 1 Litro";
      productPrice = "10.00";
      productImage = "src/images/products/coca-1l.png";
      break;
    case "2l":
      productName = "Coca Cola 2 Litros";
      productPrice = "16.00";
      productImage = "src/images/products/coca-2l.png";
      break;
  }

  image.src = productImage;
  price.innerText = `R$ ${productPrice}`;
  button.setAttribute("data-name", productName);
  button.setAttribute("data-price", productPrice);
}

function updatePepsi() {
  const litragem = document.getElementById("pepsi-litragem").value;
  const image = document.getElementById("pepsi-image");
  const price = document.getElementById("pepsi-price");
  const button = document.getElementById("add-to-cart-pepsi");

  let productName, productPrice, productImage;

  switch (litragem) {
    case "lata":
      productName = "Pepsi 350ml";
      productPrice = "4.50";
      productImage = "src/images/products/pepsi-lata.png";
      break;
    case "600":
      productName = "Pepsi 600ml";
      productPrice = "7.50";
      productImage = "src/images/products/pepsi-600.png";
      break;
    case "1l":
      productName = "Pepsi 1 Litro";
      productPrice = "10.00";
      productImage = "src/images/products/pepsi-1l.png";
      break;
    case "2l":
      productName = "Pepsi 2 Litros";
      productPrice = "16.00";
      productImage = "src/images/products/pepsi-2l.png";
      break;
  }

  image.src = productImage;
  price.innerText = `R$ ${productPrice}`;
  button.setAttribute("data-name", productName);
  button.setAttribute("data-price", productPrice);
}

function updateGuarana() {
  const litragem = document.getElementById("guarana-litragem").value;
  const image = document.getElementById("guarana-image");
  const price = document.getElementById("guarana-price");
  const button = document.getElementById("add-to-cart-guarana");

  let productName, productPrice, productImage;

  switch (litragem) {
    case "lata":
      productName = "Guaraná 350ml";
      productPrice = "5.00";
      productImage = "src/images/products/guarana-lata.png";
      break;
    case "600":
      productName = "Guaraná 600ml";
      productPrice = "7.00";
      productImage = "src/images/products/guarana-600.png";
      break;
    case "1l":
      productName = "Guaraná 1 Litro";
      productPrice = "10.00";
      productImage = "src/images/products/guarana-1l.png";
      break;
    case "2l":
      productName = "Guaraná 2 Litros";
      productPrice = "16.00";
      productImage = "src/images/products/guarana-2l.png";
      break;
  }

  image.src = productImage;
  price.innerText = `R$ ${productPrice}`;
  button.setAttribute("data-name", productName);
  button.setAttribute("data-price", productPrice);
}

function updateFanta() {
  const litragem = document.getElementById("fanta-litragem").value;
  const image = document.getElementById("fanta-image");
  const price = document.getElementById("fanta-price");
  const button = document.getElementById("add-to-cart-fanta");

  let productName, productPrice, productImage;

  switch (litragem) {
    case "lata":
      productName = "Fanta Laranja 350ml";
      productPrice = "5.00";
      productImage = "src/images/products/fanta-lata.png";
      break;
    case "600":
      productName = "Fanta Laranja 600ml";
      productPrice = "7.00";
      productImage = "src/images/products/fanta-600.png";
      break;
    case "1l":
      productName = "Fanta Laranja 1 Litro";
      productPrice = "10.00";
      productImage = "src/images/products/fanta-1l.png";
      break;
    case "2l":
      productName = "Fanta Laranja 2 Litros";
      productPrice = "16.00";
      productImage = "src/images/products/fanta-2l.png";
      break;
  }

  image.src = productImage;
  price.innerText = `R$ ${productPrice}`;
  button.setAttribute("data-name", productName);
  button.setAttribute("data-price", productPrice);
}

document.addEventListener("DOMContentLoaded", function() {
  const promoFamilia = document.getElementById("promo-familia");
  const countdown1 = document.getElementById("countdown1");
  const promoEspecial = document.getElementById("promo-especial");
  const countdown2 = document.getElementById("countdown2");

  function updateCountdown(targetDate, countdownElement, productElement) {
      const now = new Date();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
          productElement.classList.remove("hidden");
          countdownElement.textContent = "";
          enableAddToCart(productElement);
      } else {
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

          countdownElement.textContent = `Disponível em ${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
  }

  function enableAddToCart(productElement) {
      const addToCartButton = productElement.querySelector("button");
      addToCartButton.addEventListener("click", function() {
          const productName = addToCartButton.getAttribute("data-name");
          const productPrice = parseFloat(addToCartButton.getAttribute("data-price"));

          // Aqui você pode implementar a lógica para adicionar ao carrinho
          console.log(`Adicionando ao carrinho: ${productName} por R$ ${productPrice.toFixed(2)}`);
          // Exemplo: Adicionar ao carrinho pode ser implementado aqui

          // Por exemplo, redirecionamento para uma página de carrinho ou adição a um carrinho virtual
      });
  }

  const targetDate1 = new Date();
  targetDate1.setMonth(6); // Julho (0 = Janeiro, 6 = Julho)
  targetDate1.setDate(13);
  targetDate1.setHours(19, 0, 0, 0);

  const targetDate2 = new Date();
  targetDate2.setMonth(6); // Julho (0 = Janeiro, 6 = Julho)
  targetDate2.setDate(13);
  targetDate2.setHours(19, 0, 0, 0);

  setInterval(function() {
      updateCountdown(targetDate1, countdown1, promoFamilia);
      updateCountdown(targetDate2, countdown2, promoEspecial);
  }, 1000);
});

