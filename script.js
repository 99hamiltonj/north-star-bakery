let favorites = [];

const favoritesList = document.getElementById("favorites-list");
const product = document.getElementById("order-product");
const quantity = document.getElementById("order-qty");
const allergy = document.getElementById("allergy-notes");
const button = document.getElementById("save-favorite");

const form = document.getElementById("preorder-form");
const nameInput = document.getElementById("order-name");
const emailInput = document.getElementById("order-email");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const qtyError = document.getElementById("qty-error");

function validateQuantity() {
    const qty = Number(quantity.value);

    if (qty < 1 || qty > 24) {
        qtyError.textContent = "Please enter a quantity between 1 and 24.";
        return false;
    }

    qtyError.textContent = "";
    return true;
}

function validateName() {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter a name for the order.";
        return false;
    }

    nameError.textContent = "";
    return true;
}

function validateEmail() {
    const emailPattern = /^\S+@\S+\.\S+$/;

    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email, like name@example.com.";
        return false;
    }

    emailError.textContent = "";
    return true;
}

function validateForm() {
    const nameOk = validateName();
    const emailOk = validateEmail();
    const qtyOk = validateQuantity();

    return nameOk && emailOk && qtyOk;
}

function handleSubmit(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
}

form.addEventListener("submit", handleSubmit);

function displayFavorites() {
    favoritesList.innerHTML = "";

    for (const favorite of favorites) {
        const item = document.createElement("li");
        item.textContent = favorite.quantity + " " + favorite.product;

        if (favorite.allergy !== ""){
            item.textContent = item.textContent + " (" + favorite.allergy + ")";
        }
        favoritesList.appendChild(item);
    }
}
function saveFavorite() {
    if (!validateQuantity()) {
    return;
}
    const favorite = {
        product: product.value,
        quantity: quantity.value,
        allergy: allergy.value

    };
    favorites.push(favorite);
    displayFavorites();
    storeFavorites();
}

function storeFavorites() {
    localStorage.setItem("favorites", JSON.stringify(favorites));
}
function loadFavorites() {
    const saved = localStorage.getItem("favorites");

    if (saved !== null) {
        favorites = JSON.parse(saved);
        displayFavorites();
    }
}
button.addEventListener('click', saveFavorite);
loadFavorites();