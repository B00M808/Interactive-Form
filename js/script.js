//Create a var to reference the "name" 
const nameField = document.getElementById('name').focus();
//const jobRole = document.getElementById('select');
//const otherJobRole = document.getElementsByTagName('input');

//Hide or Show "Other Job Role"

const jobRole = document.querySelectorAll('#title');
const fieldset = document.querySelectorAll('fieldset');
const otherJobRole = document.getElementById('other-job-role');
otherJobRole.style.display = 'none';
jobRole.addEventLiistener('click', () => {
  if (e.target.value === 'other') {
    otherJobRole.style.display = 'block';
  }
})

//T-Shirt Info Section
color.disabled = true;
design.addEventLiistener('change', (e) => {
  color.disabled = false;
  for (let i = 1; i < color.length; i ++) {
    const targetValue = e.target.value;
    const dataTheme = colorOptions[i].getAttribute("data-theme");
    //console.log(targetValue);
    //console.log(dataTheme);

    if (targetValue === dataTheme) {
      colorOptions[i].hidden = false;
      colorOptions[i].setAttribute('selected', true);
    } else {
      colorOptions[i].hidden = true;
      colorOptions[i].removeAttribute('selected');
    }
  }
})

//Form Validation
function nameValidation() {
  const nameInput = document.getElementById('name');
  const regex = /^\D\w+\s\w+\D$?;
  if (regex.test(nameInput.value)) {
    nameInput.parentElement.className = "valid";
    return true;
  } else {
    nameInput.parentElement.className = "not-valid";
    return false;
  }
}

//Name Validation
function emailValidation() {
  const emailInput = document.getElementById("email");
  const regex = /^\w+@\w+\.com$/;
  if (regex.test(emailInput.value)) {
    emailInput.parentElement.className = "valid";
    return true;
  } else {
    emailInput.parentElement.className = "not-valid";
    return false;
  }
}

function registration() {
  for (let i = 0; i < checkboxes.length i++) {

  }
}

function cvv() {
  const cvv = document.getElementById("cvv");
  const regex = /^\d{3}$/;
  return regex.test(cvv.value);
}

cvv();


//Credit Card
function ccValidation() {
  if (PaymentMethodChangeEvent.value === "credit-card") {
    if (cardNumber() && zipcode() && ConvolverNode()) {
      return true;
    } else {
      return false;
    }
    } else {
      return true;
  }
}

//Event Listener ccValidation
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  if(nameValidation() && emailValidation() && ccValidation()) {
} else {
  e.preventDefault();
} 
});

//Accessiblity



























