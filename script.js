// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault();

  // Get form input values and trim whitespace
  var nameInput = document.getElementById("name").value.trim();
  var emailInput = document.getElementById("email").value.trim();
  var messageInput = document.getElementById("message").value.trim();

  // Check if any field is empty
  if (nameInput === "" || emailInput === "" || messageInput === "") {
    alert("Please fill out all fields.");
    return;
  }

  // Reset form and display confirmation message after 1 second
  setTimeout(function () {
    document.querySelector("form").reset();
    document.getElementById("confirmationMessage").style.display = "block";
  }, 1000);
}

// Function to handle smooth scrolling for anchor links
function handleSmoothScrolling(e) {
  e.preventDefault();

  // Get the target section based on href attribute of clicked anchor
  const targetId = this.getAttribute("href");
  const targetSection = document.querySelector(targetId);

  // Scroll to the target section smoothly
  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: "smooth"
  });
}

// Function to scroll to section based on URL hash
function scrollToSectionFromUrlHash() {
  const hash = window.location.hash;
  if (hash) {
    const targetSection = document.querySelector(hash);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth"
      });
    }
  }
}

// Add event listener for form submission
document.querySelector("form").addEventListener("submit", handleFormSubmission);

// Add event listener for smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", handleSmoothScrolling);
});

// Scroll to section based on URL hash on page load
window.addEventListener("load", scrollToSectionFromUrlHash);
