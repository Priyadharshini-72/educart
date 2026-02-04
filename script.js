function addToCart() {
    alert("Item added to cart (demo only)");
}

// SEARCH
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();
    document.querySelectorAll(".card").forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(value)
            ? "block"
            : "none";
    });
});