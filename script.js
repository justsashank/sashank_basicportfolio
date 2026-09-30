const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const form = document.getElementById("contactForm");

menuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});

document.querySelectorAll("#navMenu a").forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("show");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  let valid = true;

  if (name.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!email.value.includes("@") || !email.value.includes(".")) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  if (message.value.trim() === "") {
    messageError.textContent = "Message is required.";
    valid = false;
  } else if (message.value.trim().length < 10) {
    messageError.textContent = "Message must contain at least 10 characters.";
    valid = false;
  }

  if (valid) {
    successMessage.textContent =
      "Thank you! Your message has been validated successfully.";
    form.reset();
  }
});
