//Created Variables to Reference Elements
const nameField = document.getElementById('name');
const emailInput = document.getElementById("email");
const registerForActivitiesFieldset = document.getElementById("activities");
const cardNumberInput = document.getElementById("cc-num");
const zipInput = document.getElementById("zip");
const cvvInput = document.getElementById("cvv");
const designSelect = document.getElementById("design");
const sizeSelect = document.getElementById("size");
const colorSelect = document.getElementById("color");

// focusing name
nameField.focus();


//Job Role + Other Job Role
const jobRoleSelect = document.querySelector("#title");
const fieldset = document.querySelectorAll("fieldset");
const otherJobRole = document.getElementById("other-job-role");


//T-Shirt Info Section
//HTML to get the element data theme
colorSelect.disabled = true;
designSelect.addEventListener("change", (e) => {
  colorSelect.disabled = false;
  for (let i = 0; i < colorSelect.options.length; i ++) {
    const targetValue = e.target.value;
    const dataTheme = colorSelect[i].getAttribute("data-theme");
    if (targetValue === dataTheme) {
      colorSelect[i].hidden = false;
      colorSelect[i].setAttribute('selected', true);
    } else {
      colorSelect[i].hidden = true;
      colorSelect[i].removeAttribute('selected');
    }
  }
})


//Payment Info
const paymentSelect = document.getElementById("payment");
const creditCardInput = document.getElementById("credit-card");
const paypalInput = document.getElementById("paypal");
const bitcoinInput = document.getElementById("bitcoin");

paymentSelect.children[1].selected =true; //selecting the 1st element by default
//show or hide elements based on what is selected by end user using the display property, created a for loop to go through each selection  paypalInput.style.display = "none";
paypalInput.style.display = "none";
bitcoinInput.style.display = "none";
  
  paymentSelect.addEventListener("change", (e) => {
  
  for(let i = 0; i < paymentSelect.options.length; i++){
    if(e.target.value === "credit-card"){
      creditCardInput.style.display = "block";
      paypalInput.style.display = "none";
      bitcoinInput.style.display = "none";
    } else if(e.target.value === "paypal"){
      creditCardInput.style.display = "none";
      paypalInput.style.display = "block";
      bitcoinInput.style.display = "none";
    } else if(e.target.value === "bitcoin"){
      creditCardInput.style.display = "none";
      paypalInput.style.display = "none";
      bitcoinInput.style.display = "block";
    }
  }
})


//Form Validation
//Created helper function, Utilized RegExp test() method: if it finds a match, it returns true, otherwise return false
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
  let regEmail =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regEmail.test(emailValue)) {
    return false;
  } else {
    return true;
  }
}


//CC Number
function cardnoValidation() {
  let cardnoValue = cardNumberInput.value;
  let regCCNum = /^\d{13,16}$/;
  if(!regCCNum.test(cardnoValue)){
    return false;
  } else{
    return true;
  }
}


//Zip
function zipValidation() {
  let zipValue = zipInput.value;
  let regZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/; 
  if(!regZip.test(zipValue)){
    return false;
  } else{
    return true;
  }
}

//CVV
function cvvValidation() {
  let cvvValue = cvvInput.value;
  let regCvv = /^\d{3}$/;
  if(!regCvv.test(cvvValue)){
    return false;
  } else{
    return true;
  }
}

//Hide or Show "Other Job Role"
function jobRole(){
  otherJobRole.style.display = 'none';
  jobRoleSelect.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
      otherJobRole.style.display = 'block';
    } else{
      otherJobRole.style.display = 'none';
    }
  })
}

jobRole();

//Utilized parentElement, display block or none
function notValidForm(element){
  element.parentElement.classList.add("not-valid");
  element.parentElement.classList.remove("valid");
  element.parentElement.querySelector(".hint").style.display = "block";
}

function validForm(element){
  element.parentElement.classList.add("valid");
  element.parentElement.classList.remove("not-valid");
  element.parentElement.querySelector(".hint").style.display = "none";

}

//Registration for Activities
//display checkboxes, declare element of 0 var, decrease or increase/checked or unchecked
const checkboxes = document.querySelectorAll('#activities-box input[type="checkbox"]');
let activityFalse = false;
function registrationValidation() {
  let activitiesTotal = document.getElementById("activities-cost");
  let totalCost = 0;
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', (e) => {
      let dataCost = parseInt(e.target.getAttribute("data-cost"));   //data cost property
      if(!checkboxes[i].checked){
        activityFalse = false
      } else {
        activityFalse = true;
      }
      if(e.target.checked){
        totalCost += dataCost;
      } else {
        totalCost -= dataCost;
      }
      activitiesTotal.innerHTML = "Total: $" +totalCost;

       // Accessibility
       //focus & blur reflected in CSS 
    checkboxes[i].addEventListener('focus', (e) => {
      e.target.parentNode.classList.add("focus");
    })

    checkboxes[i].addEventListener('blur', (e) => {
      e.target.parentNode.classList.remove("focus");
    })

      if(totalCost == 0){
        document.getElementById("activities").classList.add("not-valid");
        document.getElementById("activities").classList.remove("valid");
        document.getElementById("activities").lastElementChild.style.display = "inherit";
        return false;
      } else{
        document.getElementById("activities").classList.add("valid");
        document.getElementById("activities").classList.remove("not-valid");
        document.getElementById("activities").lastElementChild.style.display = "none";
        return true;
      }

    })
  }
}

let validRegister = registrationValidation();


//Event Listener Form Submit
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {

  let validName = nameValidation();
  let validEmail = emailValidation();
  let cardNoOutput = cardnoValidation();
  let zipValidationOutput = zipValidation();
  let cvvValidationOutput = cvvValidation();

  if(validName == false){
    e.preventDefault();
    notValidForm(nameField);
  } else {
    validForm(nameField)
  }

  if(validEmail == false){
    e.preventDefault();
    notValidForm(emailInput);
  } else {
    validForm(emailInput)
  }

  if(activityFalse == false){
    e.preventDefault();
    document.getElementById("activities").classList.add("not-valid");
    document.getElementById("activities").classList.remove("valid");
    document.getElementById("activities").lastElementChild.style.display = "inherit";
  } else{
    document.getElementById("activities").classList.add("valid");
    document.getElementById("activities").classList.remove("not-valid");
    document.getElementById("activities").lastElementChild.style.display = "none";
  }

  if(cardNoOutput == false){
    e.preventDefault();
    notValidForm(cardNumberInput);
  } else{
    validForm(cardNumberInput);
  }

  if(zipValidationOutput == false){
    e.preventDefault();
    notValidForm(zipInput)
  } else {
    validForm(zipInput)
  }

  if(cvvValidationOutput == false){
    e.preventDefault();
    notValidForm(cvvInput);
  } else{
    validForm(cvvInput);
  }
})
