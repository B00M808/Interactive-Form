//Create a var to reference the "name"
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

paymentSelect.children[1].selected =true;

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
  let regCCNum = /^(?:3[47][0-9]{13})$/;
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

//Registration for Activities
const checkboxes = document.querySelectorAll('#activities-box input[type="checkbox"]');
function registrationValidation() {
  let activitiesTotal = document.getElementById("activities-cost");
  let totalCost = 0;
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', (e) => {
      let dataCost = parseInt(e.target.getAttribute("data-cost"));
      if(e.target.checked){
        totalCost += dataCost;
      } else {
        totalCost -= dataCost;
      }
      activitiesTotal.innerHTML = "Total: $" +totalCost;

      if(totalCost == 0){
        return false;
      } else{
        return true;
      }

    })

    // Accessibility
    checkboxes[i].addEventListener('focus', (e) => {
      e.target.parentNode.classList.add("focus");
    })

    checkboxes[i].addEventListener('blur', (e) => {
      e.target.parentNode.classList.remove("focus");
    })
  }
}



function notValidForm(element){
  element.parentNode.classList.add("not-valid");
  element.parentNode.classList.remove("valid");
  element.parentNode.lastElementChild.style.display = "inherit";
}

function validForm(element){
  element.parentNode.classList.add("valid");
  element.parentNode.classList.remove("not-valid");
  element.parentNode.lastElementChild.style.display = "none";
  element.parentNode.querySelector(".hint").style.display = "none";
}

//Event Listener Form Submit
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let validName = nameValidation();
  let validEmail = emailValidation();
  if(validName == false){
    notValidForm(nameField);
  } else {
    validForm(nameField)
  }

  if(validEmail == false){
    notValidForm(emailInput);
  } else {
    validForm(emailInput)
  }

  let validRegister = registrationValidation();
  if(validRegister == false){
    notValidForm(validRegister);
  } else {
    validForm(validRegister)
  }

})
