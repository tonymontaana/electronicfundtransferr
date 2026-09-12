// const toggleBtn = document.getElementById("menuToggle");
// const navMenu = document.getElementById("navMenu");

// toggleBtn.addEventListener("click", () => {
//   navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
// });

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const eyeIcon = document.getElementById("eyeIcon");

togglePassword.addEventListener("click", function () {
  const isPasswordHidden = passwordInput.type === "password";

  if (isPasswordHidden) {
    // Show password
    passwordInput.type = "text";

    togglePassword.setAttribute("aria-label", "Hide password");

    // Eye-off icon
    eyeIcon.innerHTML = `
      <path d="M9.9 4.2A10.8 10.8 0 0 1 12 4
        c6.5 0 10 8 10 8
        a18.5 18.5 0 0 1-3.1 4.2"/>

      <path d="M6.6 6.6
        C3.7 8.4 2 12 2 12
        s3.5 8 10 8
        c1.7 0 3.2-.5 4.5-1.2"/>

      <path d="m2 2 20 20"/>

      <path d="M10 10
        a3 3 0 0 0 4 4"/>
    `;
  } else {
    // Hide password
    passwordInput.type = "password";

    togglePassword.setAttribute("aria-label", "Show password");

    // Eye icon
    eyeIcon.innerHTML = `
      <path d="M2 12s3.5-7 10-7
        10 7 10 7-3.5 7-10 7-10-7-10-7Z"/>

      <circle cx="12" cy="12" r="3"/>
    `;
  }
});
