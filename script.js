const counterDisplay = document.getElementById("counter");
const stepInput = document.getElementById("stepValue");
const message = document.getElementById("message");

let counter = 0;

function getStepValue() {
  const value = Number(stepInput.value);

  if (!value || value <= 0) {
    message.textContent = "Please enter a valid positive number.";
    return null;
  }

  message.textContent = "";
  return value;
}

document.getElementById("increase").addEventListener("click", () => {
  const step = getStepValue();
  if (step === null) return;

  counter += step;
  counterDisplay.textContent = counter;
});

document.getElementById("decrease").addEventListener("click", () => {
  const step = getStepValue();
  if (step === null) return;

  if (counter - step < 0) {
    message.textContent = "Counter cannot go below zero.";
    return;
  }

  counter -= step;
  counterDisplay.textContent = counter;
});

document.getElementById("reset").addEventListener("click", () => {
  counter = 0;
  counterDisplay.textContent = counter;
  message.textContent = "Counter reset successfully.";
});
