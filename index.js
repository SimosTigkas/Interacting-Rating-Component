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
    localStorage.setItem("rating", selectedRating);
    window.location.href = `thankyou.html`;
  }
  else
    alert("Please select a rating first!");
});