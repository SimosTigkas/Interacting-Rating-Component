const rating = localStorage.getItem("rating");
const selectionText = document.querySelector(".selection");
if (rating) {
    selectionText.textContent = `You selected ${rating} out of 5`;
} else {
    selectionText.textContent = "No rating was selected.";
}