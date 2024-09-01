document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circle");
  const progressBar = document.querySelector(".progress-bar");
  const detailImg = document.getElementById("detail-img");
  const detailHeading = document.getElementById("detail-heading");
  const detailDescription = document.getElementById("detail-description");
  const detailsBox = document.querySelector(".details-box");

  // Function to show details box with animation
  function showDetailsBox() {
    detailsBox.style.opacity = "1";
    detailsBox.style.transform = "translateY(0)";
  }

  circles.forEach((circle, index) => {
    circle.addEventListener("click", () => {
      const year = circle.getAttribute("data-year");
      const description = circle.getAttribute("data-description");
      const image = circle.getAttribute("data-image");

      circles.forEach((c) => c.classList.remove("active"));
      circle.classList.add("active");

      // Update the details section
      detailImg.src = image;
      detailHeading.textContent = year;
      detailDescription.textContent = description;

      // Update the progress bar color
      progressBar.style.background = `linear-gradient(to right, #007bff ${
        ((index + 1) / circles.length) * 100
      }%, #d3d3d3 0%)`;

      // Show details box with animation
      showDetailsBox();
    });
  });

  // Initial load animation for details box
  showDetailsBox();
});
