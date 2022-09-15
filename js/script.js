//Create a var to reference the "name"
const nameField = document.getElementById('name');
const emailInput = document.getElementById("email");
const registerForActivitiesFieldset = document.getElementById("activities");
const cardNumberInput = document.getElementById("cc-num");
const zipInput = document.getElementById("zip");
const cvvInput = document.getElementById("cvv");


// focusing name
nameField.focus();

//const jobRole = document.getElementById('select');
//const otherJobRole = document.getElementsByTagName('input');

//Hide or Show "Other Job Role"

const jobRole = document.querySelectorAll('#title');
const fieldset = document.querySelectorAll('fieldset');
const otherJobRole = document.getElementById('other-job-role');
otherJobRole.style.display = 'none';
// jobRole.addEventListener('click', () => {
//   if (e.target.value === 'other') {
//     otherJobRole.style.display = 'block';
//   }
// })

//T-Shirt Info Section
color.disabled = true;
design.addEventListener('change', (e) => {
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
  let nameValue = nameField.value;
  let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if(!regName.test(nameValue)){
    return false;
  } else{
    return true;
  }
}

//Name Validation
function emailValidation() {
  
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (regex.test(emailInput.value)) {
    return true;
  } else {
    return false;
  }
}

function registration() {
  for (let i = 0; i < checkboxes.length; i++) {

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
  e.preventDefault();
  
  let nameOutput = nameValidation();
  let emailOutput = emailValidation();

});

//Accessiblity



























