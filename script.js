function PepsiProduct() {
  // Obter o elemento de litragem e o valor selecionado
  var litragemSelect = document.getElementById("litragem");
  var selectedLitragem = litragemSelect.value;

  // Atualizar a imagem do produto com base na litragem selecionada
  var productImage = document.getElementById("litragem-image");
  productImage.src =
    "./images/Produtos/pepsi-" + selectedLitragem.toLowerCase() + ".png";

  // Atualizar o preço com base na litragem selecionada
  var productPrice = document.getElementById("product-price");
  switch (selectedLitragem) {
    case "350ml":
      productPrice.textContent = "Preço: R$4.00";
      break;
    case "1L":
      productPrice.textContent = "Preço: R$8.00";
      break;
    case "2L":
      productPrice.textContent = "Preço: R$12.00";
      break;
    default:
      productPrice.textContent = "Preço: R$4.00";
      break;
  }
}

function CocaProduct() {
  // Obter o elemento de litragem e o valor selecionado
  var litragemSelect = document.getElementById("coca");
  var selectedLitragem = litragemSelect.value;

  // Atualizar a imagem do produto com base na litragem selecionada
  var productImage = document.getElementById("coca-image");
  productImage.src =
    "./images/Produtos/coca-" + selectedLitragem.toLowerCase() + ".png";

  // Atualizar o preço com base na litragem selecionada
  var productPrice = document.getElementById("coca-price");
  switch (selectedLitragem) {
    case "350ml":
      productPrice.textContent = "Preço: R$4.00";
      break;
    case "1L":
      productPrice.textContent = "Preço: R$8.00";
      break;
    case "2L":
      productPrice.textContent = "Preço: R$12.00";
      break;
    default:
      productPrice.textContent = "Preço: R$4.00";
      break;
  }
}

function GuaranaProduct() {
  // Obter o elemento de litragem e o valor selecionado
  var litragemSelect = document.getElementById("guarana");
  var selectedLitragem = litragemSelect.value;

  // Atualizar a imagem do produto com base na litragem selecionada
  var productImage = document.getElementById("guarana-image");
  productImage.src =
    "./images/Produtos/guarana-" + selectedLitragem.toLowerCase() + ".png";

  // Atualizar o preço com base na litragem selecionada
  var productPrice = document.getElementById("guarana-price");
  switch (selectedLitragem) {
    case "350ml":
      productPrice.textContent = "Preço: R$4.00";
      break;
    case "1L":
      productPrice.textContent = "Preço: R$8.00";
      break;
    case "2L":
      productPrice.textContent = "Preço: R$12.00";
      break;
    default:
      productPrice.textContent = "Preço: R$4.00";
      break;
  }
}

function FantaLaranjaProduct() {
  // Obter o elemento de litragem e o valor selecionado
  var litragemSelect = document.getElementById("fanta-laranja");
  var selectedLitragem = litragemSelect.value;

  // Atualizar a imagem do produto com base na litragem selecionada
  var productImage = document.getElementById("fanta-laranja-image");
  productImage.src =
    "./images/Produtos/fanta-laranja-" + selectedLitragem.toLowerCase() + ".png";

  // Atualizar o preço com base na litragem selecionada
  var productPrice = document.getElementById("fanta-laranja-price");
  switch (selectedLitragem) {
    case "350ml":
      productPrice.textContent = "Preço: R$4.00";
      break;
    case "1L":
      productPrice.textContent = "Preço: R$8.00";
      break;
    case "2L":
      productPrice.textContent = "Preço: R$12.00";
      break;
    default:
      productPrice.textContent = "Preço: R$4.00";
      break;
  }
}

function FantaUvaProduct() {
    // Obter o elemento de litragem e o valor selecionado
    var litragemSelect = document.getElementById("fanta-uva");
    var selectedLitragem = litragemSelect.value;
  
    // Atualizar a imagem do produto com base na litragem selecionada
    var productImage = document.getElementById("fanta-uva-image");
    productImage.src =
      "./images/Produtos/fanta-uva-" + selectedLitragem.toLowerCase() + ".png";
  
    // Atualizar o preço com base na litragem selecionada
    var productPrice = document.getElementById("fanta-uva-price");
    switch (selectedLitragem) {
      case "350ml":
        productPrice.textContent = "Preço: R$4.00";
        break;
      case "2L":
        productPrice.textContent = "Preço: R$12.00";
        break;
      default:
        productPrice.textContent = "Preço: R$4.00";
        break;
    }
}

function SpriteProduct() {
    // Obter o elemento de litragem e o valor selecionado
    var litragemSelect = document.getElementById("sprite");
    var selectedLitragem = litragemSelect.value;
  
    // Atualizar a imagem do produto com base na litragem selecionada
    var productImage = document.getElementById("sprite-image");
    productImage.src =
      "./images/Produtos/sprite-" + selectedLitragem.toLowerCase() + ".png";
  
    // Atualizar o preço com base na litragem selecionada
    var productPrice = document.getElementById("sprite-price");
    switch (selectedLitragem) {
      case "350ml":
        productPrice.textContent = "Preço: R$4.00";
        break;
      case "1L":
        productPrice.textContent = "Preço: R$8.00";
        break;
      case "2L":
        productPrice.textContent = "Preço: R$12.00";
        break;
      default:
        productPrice.textContent = "Preço: R$4.00";
        break;
    }
}