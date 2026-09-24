const feet = document.getElementById("feet");
const inch = document.getElementById("inch");
const weight = document.getElementById("weight");
const bmiResult = document.getElementById("bmi_result");
const calculateButton = document.getElementById("calculate");

// Add updateBMI()
function updateBMI() {
  let heightInInches = parseInt(feet.value) * 12 + parseInt(inch.value);
  let bmi = (parseInt(weight.value) / (heightInInches * heightInInches)) * 703;
  bmiResult.value = bmi.toFixed(2);
}

// Add a click rule for the Calculate button
calculateButton.addEventListener("click", updateBMI);
