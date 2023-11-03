const submitButton = document.querySelector("#submit-button");
const form = document.querySelector("form");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("button clicked");
  const inputItems = form.querySelectorAll(".input-item");
  for (const inputItem of inputItems) {
    const input = inputItem.querySelector("input");
    const error = inputItem.querySelector(".error");

    if (input.id === "card-number") {
      const cardNumberValue = input.value;
      const pattern = /^\d{4} \d{4} \d{4} \d{4}$/;

      if (!pattern.test(cardNumberValue)) {
        if (error) {
          error.style.display = "block";
        }
        input.classList.add("input-error");
      } else {
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
      } else {
        if (error) {
          error.style.display = "none";
        }
        input.classList.remove("input-error");
      }
    }
  }
});
