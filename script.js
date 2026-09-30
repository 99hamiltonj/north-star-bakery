let favorites = [];

const favoritesList = document.getElementById("favorites-list");
const product = document.getElementById("order-product");
const quantity = document.getElementById("order-qty");
const allergy = document.getElementById("allergy-notes");
const button = document.getElementById("save-favorite");

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