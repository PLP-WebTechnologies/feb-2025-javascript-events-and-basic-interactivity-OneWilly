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

    usernameInput.addEventListener("input", () => {
      if (usernameInput.value.trim() === "") {
        usernameError.textContent = "Username cannot be empty.";
      } else {
        usernameError.textContent = "";
      }
    });
    
    emailInput.addEventListener("input", () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Invalid email format.";
      } else {
        emailError.textContent = "";
      }
    });

    const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => {
  usernameError.textContent = "";
  emailError.textContent = "";
});

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
let clickCount = 0;
colorButton.addEventListener("click", () => {
  clickCount++;
  document.getElementById("clickCounter").textContent = `Button clicked: ${clickCount} times`;
});

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});