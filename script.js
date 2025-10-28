// Wait for the page to load
document.addEventListener("DOMContentLoaded", (event) => {
  // Get the heading and the sound elements
  const wazzupHeading = document.getElementById("wazzup-heading");
  const wazzupSound = document.getElementById("wazzupSound");

  // Play sound when mouse enters
  wazzupHeading.addEventListener("mouseenter", () => {
    wazzupSound.play();
  });

  // Optional: Stop and reset sound when mouse leaves
  wazzupHeading.addEventListener("mouseleave", () => {
    wazzupSound.pause();
    wazzupSound.currentTime = 0; // Reset to the beginning
  });
});
