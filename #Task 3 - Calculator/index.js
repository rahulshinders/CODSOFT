let currentInput = "";
let operator = "";
let currentResult = 0;

function updateResult() {
  document.getElementById("result").innerText = currentInput || "0";
}

function handleButtonClick(value) {
  if (!isNaN(value) || value === "0") {
    currentInput += value;
  } else if (value === "C") {
    currentInput = "";
  } else if (value === "=") {
    calculate();
  } else {
    setOperator(value);
  }

  updateResult();
}

function setOperator(newOperator) {
  operator = newOperator;
  currentResult = parseFloat(currentInput);
  currentInput = "";
}

function calculate() {
  const inputNumber = parseFloat(currentInput);
  switch (operator) {
    case "+":
      currentResult += inputNumber;
      break;
    case "-":
      currentResult -= inputNumber;
      break;
    case "*":
      currentResult *= inputNumber;
      break;
    case "/":
      currentResult /= inputNumber;
      break;
  }
  currentInput = currentResult.toString();
  operator = "";
  updateResult();
}

function clearInput() {
    currentInput = "";
    updateResult();
}

const buttons = document.querySelectorAll("#calculator button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    handleButtonClick(value);
  });
});
