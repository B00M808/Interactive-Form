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


//Register for Activities
function registration() {
  for (let i = 0; i < checkboxes.length; i++) {

  }
}

//Payment Info

function ccValidation() {
  if (PaymentMethodChangeEvent.value === "credit-card") {
    if (cardNumber() && zipcode() && cvv()) {
      return true;
    } else {
      return false;
    }
    } else {
      return true;
  }
}

*/
//Form Validation****

//Name
function nameValidation() {
  let nameValue = nameField.value;
  let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if(!regName.test(nameValue)){
    return false;
  } else{
    return true;
  }
}

//Email
function emailValidation() {
  let emailValue = emailInput.value;
  let regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regEmail.test(emailInput)) {
    return true;
  } else {
    return false;
  }
}

//Registration for Activities
function registrationValidation() {
  let registrationValue = registerForActivitiesFieldset.value;
  let regActivities = /^[a-zA-Z]+ [a-zA-Z]+$/; 
  if(!regActivities.test(registrationValue)){
    return false;
  } else{
    return true;
  }
}

//CC Number
function cardnoValidation() {
  let cardnoValue = cardNumberInput.value;
  let regCCNum = /^(?:3[47][0-9]{13})$/;
  if(!regCCNum.test(cardNumberInput)){
    return false;
  } else{
    return true;
  }
}


//Zip
function zipValidation() {
  let zipValue = zipInput.value;
  let regZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/; 
  if(!regZip.test(zipInput)){
    return false;
  } else{
    return true;
  }
}

//CVV
function cvvValidation() {
  let cvvValue = cvvInput.value;
  let regCvv = /^\d{3}$/;
  if(!regCvv.test(cvvInput)){
    return false;
  } else{
    return true;
  }
}

/*



//Event Listener Form Submit
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let nameOutput = nameValidation();

  /*Is it neccessary to create var for all?
  
  let emailOutput = emailValidation();
  let registerForActivitiesFieldset = registrationValidation();
  let cardNumberInput = cardnoValidation();
  let zipInput = zipValidation();
  let cvvInput = cvvValidation();*/

});


//Accessiblity



























