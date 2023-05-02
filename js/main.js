


let inpName = document.getElementById('name');
let outName = document.getElementById('credit-name')

let inpCard = document.getElementById('number-card');
let outCard = document.getElementById('credit-number');

let inpMonth = document.getElementById('input-month');
let outMonth = document.getElementById('credit-month');

let inpYear = document.getElementById('input-year');
let outYear = document.getElementById('credit-year');

let inpCvc = document.getElementById('input-cvc');
let outCvc = document.getElementById('cvc');

let submit = document.getElementById('submit');

let hideName = document.querySelector('.hide-name');
let hideCard = document.querySelector('.hide-card');
let hideDate = document.querySelector('.hide-date');
let hideCvc = document.querySelector('.hide-cvc');

let done = document.querySelector('.done');

let allForm = document.querySelector('.All-Form');


let form = document.querySelector('form');


form.onsubmit = function(e) {
  

  // validation

  let validName = false;
  let validNumber = false;
  let validMonth = false;
  let validYear = false;
  let validCvc = false;
  let validNameNumber = false;


  let regCard = /\d{4}\s\d{4}\s\d{4}\s\d{4}/;

  let month_Reg = /\d{2}/;

  let year_Reg = /\d{2}/;

  let cvc_Reg = /\d{3}/;

  if (inpName.value.match(/[0-9]/)) {
    validNameNumber = false;
  } else {
    validNameNumber = true;
  }

  if (inpName.value !== "") {
    validName = true;
  };

  if (inpCard.value.match(regCard) && inpCard.value.length == 19) {
    validNumber = true;
  }

  if (inpMonth.value.match(month_Reg) && inpMonth.value.length == 2) {
    validMonth = true;
  }

  if (inpYear.value.match(year_Reg) && inpYear.value.length == 2) {
    validYear = true;
  }

  if (inpCvc.value.match(cvc_Reg) && inpCvc.value.length == 3) {
    validCvc= true;
  }




  if (validName === false || validNumber === false || validMonth === false || validYear === false || validCvc === false || validNameNumber == false) {

    e.preventDefault();

  } else {
    e.preventDefault();
    // e.classList.Add('hide')
    allForm.classList.add('display-none');
    done.classList.remove('display-none');

  }


} 

  inpName.addEventListener('blur', function() {

    
    let nameRegExp = /[0-9]/;

    if (inpName.value == "" || inpName.value.match(nameRegExp)) {
      hideName.classList.remove('hide');
      validName = false;
      // outName.textContent = 'YOUSEF ABDALLAH'

    } else {
      hideName.classList.add('hide')
      validName = true;
    }
  })



  

  inpCard.addEventListener('keyup', function() {


    
    let cardReg = /\d{4}\s\d{4}\s\d{4}\s\d{4}/;


    if (inpCard.value.match(cardReg)) {
      hideCard.classList.add('hide');
      validNumber = true;
    } else {
      hideCard.classList.remove('hide');
      validNumber = false;
    }

    if (inpCard.value.length == 19) {
      inpMonth.focus();
    }

  })


  inpMonth.addEventListener('keyup' , function(){
    let monthReg = /\d{2}/;

    if (inpMonth.value.match(monthReg)) {
      hideDate.classList.add('hide');
      validMonth = true;
    } else {
      hideDate.classList.remove('hide');
      validMonth = false;
    }

    if(inpMonth.value.length == 2) {
      inpYear.focus();
    }
  }) 
    
  inpYear.addEventListener('keyup', function() {
    let yearReg = /\d{2}/;

    if (inpYear.value.match(yearReg)) {
      hideDate.classList.add('hide');
      validYear = true;
    } else {
      hideDate.classList.remove('hide');
      validYear = false;
    }
    if (inpYear.value.length == 2) {
      inpCvc.focus()
    }
  })
  
  inpCvc.onblur = function() {
    
    let cvcReg = /\d{2}/;

    if (inpCvc.value.match(cvcReg)) {
      hideCvc.classList.add('hide');
      validCvc = true;
    } else {
      hideCvc.classList.remove('hide');
      validCvc = false;
    }
  }
  

  // output Card



  inpName.onkeyup = function() {
    outName.textContent = inpName.value;
  }

  inpCard.addEventListener('keyup', function(){

    outCard.textContent = inpCard.value;
    outCard.style.letterSpacing = '3px';
    outCard.style.left = '30px';

  })


  inpMonth.onkeyup = function() {
    outMonth.textContent = inpMonth.value;
  }


  inpYear.onkeyup = function() {
    outYear.textContent = inpYear.value;
  }

  inpCvc.onkeyup = function() {
    outCvc.textContent = inpCvc.value;
  }

  // inpName.onblur = function() {
  //   if(inpName !== "") {
  //     inpCard.focus()
  //   }
  // }

  // inpCard.onblur = function() {
  //   if (inpCard.value.length == 19) {
  //     inpMonth.focus()
  //   }
  // }