const submitButton = document.querySelector("#submit-button");
const form = document.querySelector("form");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const inputItems = form.querySelectorAll(".input-item");
  for (const inputItem of inputItems) {
    const input = inputItem.querySelector("input");
    const error = inputItem.querySelector(".error");
    const cardNumber = document.getElementById("card-number");
    const mmInput = document.getElementById("mm");
    const yyInput = document.getElementById("yy");
    const cvcInput = document.getElementById("cc");
    if (!input.value) {
      if (error) {
        error.style.display = "block";
      }
      input.classList.add("input-error");
    }
  }
});
