// GeneratePin section
const generatePin = document.getElementById("generatePin");
generatePin.addEventListener("click", function () {
  const pinInput = (document.getElementById("pinInput").value = (
    Math.random() * 10000 +
    ""
  ).split(".")[0]);
  const createPin = parseInt(pinInput);
  document.getElementById("pinInput").value = createPin;
  //   document.getElementById("pinInput").value = "";
});

// Submit section
let input = document.getElementById("inputNumber");
let previousValue = input.value;
const buttonContainer = document.getElementById("buttons");

function clickButton(buttonValue) {
  const currentValue = buttonValue;
  input.value = previousValue + currentValue;
  previousValue = input.value;
}

// press7.addEventListener("click", function () {
//   const press7 = document.getElementById("press7").innerText;
//   number7 = parseInt(press7);
//   document.getElementById("inputNumber").value = number7;
// });
// press8.addEventListener("click", function () {
//   clickButton();
// });
// function clickButton() {
//   const press8 = document.getElementById("press8").innerText;
//   number8 = parseInt(press8);
//   document.getElementById("inputNumber").value = number8;
// }

// press7.addEventListener("click", function () {
//   const press7 = document.getElementById("press7").innerText;
//   number7 = parseInt(press7);
//   document.getElementById("inputNumber").value = number7;
// });
// press8.addEventListener("click", function () {
//   const press8 = document.getElementById("press8").innerText;
//   number8 = parseInt(press8);
//   document.getElementById("inputNumber").value = number8;
// });

const cancelAll = document.getElementById("cancelAll");
cancelAll.addEventListener("click", function () {
  input.value = " ";
});

// submitButton
let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function () {
  const inputValue = document.getElementById("inputNumber");
  //   const pinCode = pinInput.value;

  if (pinInput.value == inputValue.value) {
    alert((document.querySelector("#okNotify").innerText = success));
  } else {
    document.getElementById("#notOkNotify").innerText = Fail;
  }
});
