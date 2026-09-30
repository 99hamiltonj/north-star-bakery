
const product = document.getElementById("order-product");
const quantity = document.getElementById("order-qty");
const allergy = document.getElementById("allergy-notes");

function saveFavorite() {
    console.log(product.value);
    console.log(quantity.value);
    console.log(allergy.value);
}

const button = document.getElementById("save-favorite");

button.addEventListener('click', saveFavorite);