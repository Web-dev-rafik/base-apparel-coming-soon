const form = document.querySelector(".form");
const emailInput = document.getElementById("email");
const formError = document.querySelector(".form-error");
const formLog = document.querySelector(".form-log");

emailInput.addEventListener("invalid", (e) => {
  e.preventDefault();
  formError.style.display = "block";
  emailInput.style.borderColor = "red";
  formLog.style.display = "block";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formError.style.display = "none";
  emailInput.style.borderColor = "";
  formLog.style.display = "none";
});
