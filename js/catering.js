function sendEmail() {
  // Get customer information
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  // Get selected options
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

  // Basic validation
  if (!name) {
    alert("Nimi on pakollinen tieto.");
    return;
  }

  if (!email) {
    alert("Sähköposti on pakollinen tieto.");
    return;
  }

  if (selectedProteins.length < 2) {
    alert("Valitse vähintään 2 proteiinivaihtoehtoa.");
    return;
  }

  if (selectedVeggies.length < 2) {
    alert("Valitse vähintään 2 kasvisvaihtoehtoa.");
    return;
  }

  const recipientEmail = "marlena@gourmetstreetfood.fi";
  const subject = "Catering-tilaus";
  const body =
    "Catering-tilaus:\n\n" +
    "Nimi: " + name + "\n" +
    "Sähköposti: " + email + "\n" +
    "Puhelinnumero: " + phone + "\n\n" +
    (message ? "Lisätietoja: " + message + "\n\n" : "") +
    "Proteiinivaihtoehdot:\n- " +
    selectedProteins.join("\n- ") +
    "\n\nKasvisvaihtoehdot:\n- " +
    selectedVeggies.join("\n- ");

  const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.open(mailtoLink, '_blank');
}
