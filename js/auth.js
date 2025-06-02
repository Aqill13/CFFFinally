
function togglePassword(fieldId) {
  const passwordInput = document.getElementById(fieldId);
  const toggleButton = passwordInput.nextElementSibling;

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.textContent = "🙈";
    toggleButton.setAttribute("aria-label", "Şifrəni gizlət");
  } else {
    passwordInput.type = "password";
    toggleButton.textContent = "👁️";
    toggleButton.setAttribute("aria-label", "Şifrəni göstər");
  }
}

// Password strength checker
function checkPasswordStrength(password) {
  let strength = 0;
  let feedback = "";

  if (password.length >= 8) strength++;
  if (password.match(/[a-z]/)) strength++;
  if (password.match(/[A-Z]/)) strength++;
  if (password.match(/[0-9]/)) strength++;
  if (password.match(/[^a-zA-Z0-9]/)) strength++;

  const strengthFill = document.getElementById("strength-fill");
  const strengthText = document.getElementById("strength-text");

  switch (strength) {
    case 0:
    case 1:
      strengthFill.className = "strength-fill strength-weak";
      feedback = "Zəif";
      break;
    case 2:
    case 3:
      strengthFill.className = "strength-fill strength-fair";
      feedback = "Orta";
      break;
    case 4:
      strengthFill.className = "strength-fill strength-good";
      feedback = "Yaxşı";
      break;
    case 5:
      strengthFill.className = "strength-fill strength-strong";
      feedback = "Güclü";
      break;
  }

  strengthText.textContent = `Şifrə gücü: ${feedback}`;
  return strength >= 3;
}

// Form validation
function validateForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const studentId = document.getElementById("studentId").value;
  const faculty = document.getElementById("faculty").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const terms = document.getElementById("terms").checked;

  const registerBtn = document.getElementById("register-btn");

  const isValid =
    firstName &&
    lastName &&
    email &&
    studentId &&
    faculty &&
    password &&
    confirmPassword &&
    terms &&
    password === confirmPassword &&
    checkPasswordStrength(password);

  registerBtn.disabled = !isValid;
}

document.getElementById("password").addEventListener("input", function () {
  checkPasswordStrength(this.value);
  validateForm();
});

document
  .getElementById("confirmPassword")
  .addEventListener("input", function () {
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (this.value && this.value !== password) {
      this.setCustomValidity("Şifrələr uyğun gəlmir");
      errorMessage.textContent = "Şifrələr uyğun gəlmir";
      errorMessage.style.display = "block";
    } else {
      this.setCustomValidity("");
      errorMessage.style.display = "none";
    }
    validateForm();
  });

["firstName", "lastName", "email", "studentId", "faculty", "terms"].forEach(
  (id) => {
    document.getElementById(id).addEventListener("input", validateForm);
    document.getElementById(id).addEventListener("change", validateForm);
  }
);

document
  .querySelector(".register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");

    if (data.password !== data.confirmPassword) {
      errorMessage.textContent = "Şifrələr uyğun gəlmir";
      errorMessage.style.display = "block";
      return;
    }

    if (!data.terms) {
      errorMessage.textContent = "İstifadə şərtlərini qəbul etməlisiniz";
      errorMessage.style.display = "block";
      return;
    }

    errorMessage.style.display = "none";
    successMessage.style.display = "block";
  });
validateForm();
