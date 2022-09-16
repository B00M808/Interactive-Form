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


//Payment Info
const creditCardInput = document.getElementById("credit-card");
const paypalInput = document.getElementById("paypal");
const bitcoinInput = document.getElementById("bitcoin");
document.getElementById("paypal").style.visibility = "none"; 
document.getElementById("bitcoin").style.visibility = "none"; 

//payment.children

function paymentInfo() {
  const paymentInput = document.getElementById("payment").children;
   
  var i;
  for(i = 0; i < doc.length; i++) {
      doc[i].style.color = "white";
      doc[i].style.backgroundColor = "green";

      const  = document.querySelector("");
      form.addEventListener("submit", (e) => {
        e.preventDefault();

//What is this code below

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



  /*Is it neccessary to create var for all?
  
  let emailOutput = emailValidation();
  let registerForActivitiesFieldset = registrationValidation();
  let cardNumberInput = cardnoValidation();
  let zipInput = zipValidation();
  let cvvInput = cvvValidation();*/

});


//Accessiblity

const checkboxes = activities;
function registration() {
  for (let i = 0; i < checkboxes.length; i++) {
form.addEventListener("focus", () => checkboxes.classList.add('focused'), true);
  form.addEventListener("blur", () => checkboxes.classList.remove('focused'), true);

  }
}

//Event Listener Form Submit
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();


  
  const email = document.getElementById("mail");
  const emailError = document.querySelector("#mail + span.error");
  
  email.addEventListener("input", (e) => {

  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});


form.addEventListener("submit", (event) => {
  // if the email field is valid, we let the form submit
  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "Entered value needs to be an e-mail address.";
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = "error active";
}






















