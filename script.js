const submitButton = document.querySelector("#submit-button");
const form = document.querySelector("form");
const initialState = document.querySelector(".initial-state");
const completeState = document.querySelector(".complete-state");
const continueButton = document.querySelector("#continue-button");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("button clicked");
  const inputItems = form.querySelectorAll(".input-item");

  let formIsValid = true;

  for (const inputItem of inputItems) {
    const input = inputItem.querySelector("input");
    const error = inputItem.querySelector(".error");

    if (input.id === "card-number") {
      const cardNumberValue = input.value;
      const pattern = /^\d{4} \d{4} \d{4} \d{4}$/;

      if (!pattern.test(cardNumberValue)) {
        formIsValid = false;
        if (error) {
          error.style.display = "block";
        }
        input.classList.add("input-error");
      } else {
        formIsValid = true;
        if (error) {
          error.style.display = "none";
        }
        input.classList.remove("input-error");
      }
    } else {
      if (!input.value) {
        if (error) {
          error.style.display = "block";
        }
        input.classList.add("input-error");
        formIsValid = false;
      } else {
        if (error) {
          error.style.display = "none";
        }
        input.classList.remove("input-error");
      }
    }
    if (input.classList.contains("input-error")) {
      formIsValid = false;
    }
  }
  if (formIsValid) {
    initialState.style.display = "none";
    completeState.style.display = "block";
  }
});

const initialValues = {
  "card-name": "Jane Appleseed",
  "card-number": "0000 0000 0000 0000",
  "mm": "00",
  "yy": "00",
  'cvc': "000",
};

function resetExampleSection() {
  for (const key in initialValues) {
    if (initialValues.hasOwnProperty(key)) {
      const element = document.getElementById(key);
      if (element) {
        element.textContent = initialValues[key];
      }
    }
  }
}

continueButton.addEventListener("click", function () {
  form.reset();
  resetExampleSection();
  initialState.style.display = "block";
  completeState.style.display = "none";
});

function limitInputLength(element, maxLength) {
  if (element.value.length > maxLength) {
    element.value = element.value.slice(0, maxLength);
  }
}

function updateCardContent(elementId, value) {
  document.getElementById(elementId).textContent = value;
}
