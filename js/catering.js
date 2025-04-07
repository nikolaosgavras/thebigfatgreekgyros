function sendEmail() {
  let selectedProteins = [];
  let selectedVeggies = [];

  document
    .querySelectorAll('input[name="protein[]"]:checked')
    .forEach((checkbox) => {
      selectedProteins.push(checkbox.value);
    });

  document
    .querySelectorAll('input[name="veggie[]"]:checked')
    .forEach((checkbox) => {
      selectedVeggies.push(checkbox.value);
    });

  // Validation
  if (selectedProteins.length < 2) {
    alert("Valitse vähintään 2 proteiinivaihtoehtoa.");
    return;
  }

  if (selectedVeggies.length < 2) {
    alert("Valitse vähintään 2 kasvisvaihtoehtoa.");
    return;
  }

  let email = "marlena@gourmetstreetfood.fi"; // The email from the contact section
  let subject = "Catering-tilaus";
  let body =
    "Catering-tilaus:\n\n" +
    "Proteiinivaihtoehdot:\n- " +
    selectedProteins.join("\n- ") +
    "\n\nKasvisvaihtoehdot:\n- " +
    selectedVeggies.join("\n- ");

  let mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
}
