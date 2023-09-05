const buttonElements = document.getElementsByClassName("button");
//const signElements = document.getElementsByClassName("calc_sign");
const result = document.getElementById("result");
let firstInput = true;

/*for (let i = 0; i < numberElements.length; i++) {
  console.log(i);
}

Array.from(numberElements).forEach((element) => {
  console.log(element);
});*/

for (const buttonElement of buttonElements) {
  buttonElement.addEventListener("click", () => {
    buttonListener(buttonElement);
  });
}

const buttonListener = (button) => {
  if (button.innerText == "=") {
    calculate();
  } else {
    display(button.innerText);
  }
};

const clearResult = () => {
  result.innerText = "";
};

const display = (value) => {
  if (firstInput) {
    clearResult();
    firstInput = false;
  }
  result.innerText += value;
};

const calculate = () => {
  let res = eval(result.innerText);

  display("=" + res);
  firstInput = true;
};
