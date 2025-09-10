let selectedRating = null;

const ratings = document.querySelectorAll(".rating");
const submitBtn = document.querySelector(".submitBtn");

ratings.forEach((button) => {
    button.addEventListener("click", () => {
        selectedRating = button.textContent;
        ratings.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});

submitBtn.addEventListener("click", () => {
  if (selectedRating) {
    window.location.href = `index${selectedRating}.html`;
  } else {
    alert("Please select a rating first!");
  }
});