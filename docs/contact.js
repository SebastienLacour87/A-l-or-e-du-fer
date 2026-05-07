// Validation formulaire contact
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    let isValid = true;

    // Validation email
    const email = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email.value.trim())) {
      emailError.classList.remove("hidden");
      isValid = false;
    } else {
      emailError.classList.add("hidden");
    }

    // Validation téléphone
    const tel = document.getElementById("telephone");
    const telError = document.getElementById("tel-error");
    const telRegex = /^(\+33|0)[1-9](\s?\d{2}){4}$/;
    if (!telRegex.test(tel.value.trim())) {
      telError.classList.remove("hidden");
      isValid = false;
    } else {
      telError.classList.add("hidden");
    }

    // Validation RGPD
    const rgpd = document.getElementById("rgpd");
    const rgpdError = document.getElementById("rgpd-error");
    if (!rgpd.checked) {
      rgpdError.classList.remove("hidden");
      isValid = false;
    } else {
      rgpdError.classList.add("hidden");
    }

    if (!isValid) e.preventDefault();
  });
}
