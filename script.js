document.addEventListener("DOMContentLoaded", function() {
  const nameInput = document.getElementById("name");
  const verifyButton = document.getElementById("verifyButton");
  const greetingContainer = document.getElementById("greeting-container");
  const mainContent = document.getElementById("mainContent");
  const cards = document.querySelectorAll(".animate");
  const texts = document.querySelectorAll(".animate-text");

  verifyButton.addEventListener("click", function() {
    if (nameInput.value.trim().toLowerCase() === "mehrab") {
      greetingContainer.style.display = "none";
      mainContent.style.display = "block";

      // Animate each card with a delay
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("show-card");
        }, index * 3000);
      });

      // Animate text inside cards with a delay after cards appear
      texts.forEach((text, index) => {
        setTimeout(() => {
          text.classList.add("show-text");
        }, 800 + index * 3000);
      });

    } else {
      alert("Access Denied! Please enter the correct name.");
    }
  });
});
