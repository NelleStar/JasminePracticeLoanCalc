window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  //function premade - upon review it is an obj with key/value pairs - asked TA and got response that + is basically ParseInt() which will make the string in the input a number
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

const values = {// here we are making an object of key:value pairs using default values in the same order as getCurrentValues
  amount: 10000, 
  years: 30, 
  rate: 4.5
}; 

// assigning the inputs from the user to variables to use
const amountUI = document.getElementById('loan-amount');
const yearsUI = document.getElementById('loan-years');
const rateUI = document.getElementById('loan-rate');

// Call a function to calculate the current monthly payment
function setupIntialValues() {
//setting the ui values as the object values
  amountUI.value = values.amount;
  yearsUI.value = values.years;
  rateUI.value = values.rate;

// need to call a function to calc the current monthly payments - next empty function seems to indicate thats what its for
  update(); //*come back if needed!

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues
  return updateMonthly(calculateMonthlyPayment(currentUIValues))
}


function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12; //take the default rate and divide by 100 because it is currently a percentage and then divide by 12 for a monthly breakdown
  const n = Math.floor(values.years * 12); // n is the total number of payments found by multiplying years by 12

  return (
    (monthlyRate * values.amount) / 
    (1 - Math.pow((1 + monthlyRate), -n))
    ).toFixed(2) 
  // the above is using the given formula, .toFixed converts to a string AND rounds to a specified number of decimals
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const uiMonthly = document.getElementById('monthly-payment')
  monthly.innerText = '$' + monthly
}
