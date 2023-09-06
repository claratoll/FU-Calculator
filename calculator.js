const buttonElements = document.getElementsByClassName("button");
const calcNumberElements = document.getElementsByClassName("calc_number");
const calcSignElements = document.getElementsByClassName("calc_sign");
const result = document.getElementById("result");
let firstInput = true;
let firstNumberBool = true;
let secondNumberBool = false;
let firstNumber = "";
let secondNumber = "";
let calcSign = "";
const resultList = document.getElementById("result_list");
const moreButton = document.getElementById("more_sign");

for (const buttonElement of buttonElements) {
  buttonElement.addEventListener("click", () => {
    buttonListener(buttonElement);
  });
}

const buttonListener = (button) => {
  if (button.innerText == "=") {
    calculate();
  } else if (button.innerText == "more") {
    moreButtonListener(moreButton);
  } else {
    let value = button.innerText;
    result.innerText += value;
  }

  if (
    button.innerText == "+" ||
    button.innerText == "-" ||
    button.innerText == "*" ||
    button.innerText == "/"
  ) {
    calcSign = button.innerText;
    console.log(calcSign);
    result.innerText = "";
    secondNumberBool = true;
    firstNumberBool = false;
  }

  if (firstNumberBool) {
    firstNumber = result.innerText;
    console.log("first number = " + firstNumber);
  } else if (secondNumberBool) {
    secondNumber = result.innerText;
    console.log("secondNumber = " + secondNumber);
  }
};

const moreButtonListener = (moreButton) => {
  const calcSignExtras = document.getElementsByClassName("calc_sign_extra");
  for (const element of calcSignExtras) {
    element.classList.toggle("hide");
  }
  //
};

const clearResult = () => {
  result.innerText = "";
  firstNumber = "";
  secondNumber = "";
  calcSign = "";
};

const calculate = () => {
  let res = 0; // Initialize res as a number

  // Convert firstNumber and secondNumber to floating-point numbers
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);

  if (calcSign == "+") {
    res = num1 + num2;
  } else if (calcSign == "-") {
    res = num1 - num2;
  } else if (calcSign == "*") {
    res = num1 * num2;
  } else if (calcSign == "/") {
    if (num2 !== 0) {
      // Check for division by zero
      res = num1 / num2;
    } else {
      res = "Error: Division by zero";
    }
  }

  firstNumberBool = true;
  secondNumberBool = false;
  let resVal = firstNumber + calcSign + secondNumber + "=" + res;
  firstInput = true;
  clearResult();
  displayResult(resVal);
};

const displayResult = (value) => {
  const listItem = document.createElement("li");

  listItem.innerText = value;
  resultList.appendChild(listItem);
};
