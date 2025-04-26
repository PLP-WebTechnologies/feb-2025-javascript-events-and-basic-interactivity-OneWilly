// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Form Validation
  const form = document.getElementById("demoForm");
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const usernameError = document.getElementById("usernameError");
  const emailError = document.getElementById("emailError");

  form.addEventListener("submit", (event) => {
    let valid = true;

    // Username Validation
    if (usernameInput.value.trim() === "") {
      usernameError.textContent = "Username is required.";
      valid = false;
    } else {
      usernameError.textContent = "";
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = "Please provide a valid email.";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    if (!valid) {
      event.preventDefault(); // Prevent form submission on invalid input
    }
  });

  // Interactive Element (Change Button Color)
  const colorButton = document.getElementById("colorButton");
  colorButton.addEventListener("click", () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    colorButton.style.backgroundColor = randomColor;
  });
});
