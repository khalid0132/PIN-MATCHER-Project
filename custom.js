// GeneratePin section
const generatePin = document.getElementById("generatePin");
generatePin.addEventListener("click", function () {
  const random = Math.random() * 10000;
  const pinInput = (random + "").split(".")[0];
  //   const pinInput = (document.getElementById("pinInput").value = (
  //     Math.random() * 10000 +
  //     ""
  //   ).split(".")[0]);
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

// cancel button
const cancelAll = document.getElementById("cancelAll");
cancelAll.addEventListener("click", function () {
  let input = document.getElementById("inputNumber");
  input.value = " ";

  // aro kichu update korte hobe aikhane cancel a... < button tao update korte hobe
});

// submitButton
let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function () {
  const inputValue = document.getElementById("inputNumber").value;
  const generatedPin = document.getElementById("pinInput").value;
  //   const pinCode = pinInput.value;

  if (inputValue === generatedPin) {
    alert(document.getElementById("okNotify").innerText);
  } else {
    alert(document.getElementById("notOkNotify").innerText);
  }
});
