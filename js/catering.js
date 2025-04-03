function sendEmail() {
  let selectedProteins = [];
  let selectedVeggies = [];
  
  document.querySelectorAll('input[name="protein[]"]:checked').forEach((checkbox) => {
    selectedProteins.push(checkbox.value);
  });
  
  document.querySelectorAll('input[name="veggie[]"]:checked').forEach((checkbox) => {
    selectedVeggies.push(checkbox.value);
  });

  // Validation
  if (selectedProteins.length !== 2) {
    alert("Valitse tasan 2 proteiinivaihtoehtoa.");
    return;
  }
  
  if (selectedVeggies.length !== 2) {
    alert("Valitse tasan 2 kasvisvaihtoehtoa.");
    return;
  }

  let email = "marlena@gourmetstreetfood.fi"; // The email from the contact section
  let subject = "Catering-tilaus";
  let body = "Catering-tilaus:\n\n" +
             "Proteiinivaihtoehdot:\n- " + selectedProteins.join("\n- ") + 
             "\n\nKasvisvaihtoehdot:\n- " + selectedVeggies.join("\n- ");
             
  let mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
}

// Optional: Add event listeners to enforce selection limits
document.addEventListener('DOMContentLoaded', function() {
  const proteinOptions = document.querySelectorAll('.protein-option');
  const veggieOptions = document.querySelectorAll('.veggie-option');
  
  proteinOptions.forEach(option => {
    option.addEventListener('change', function() {
      let checkedCount = document.querySelectorAll('.protein-option:checked').length;
      if (checkedCount > 2) {
        this.checked = false;
        alert("Voit valita vain 2 proteiinivaihtoehtoa.");
      }
    });
  });
  
  veggieOptions.forEach(option => {
    option.addEventListener('change', function() {
      let checkedCount = document.querySelectorAll('.veggie-option:checked').length;
      if (checkedCount > 2) {
        this.checked = false;
        alert("Voit valita vain 2 kasvisvaihtoehtoa.");
      }
    });
  });
});