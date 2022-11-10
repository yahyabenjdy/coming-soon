const $btn = document.querySelector(".btn");
const $emailInput = document.querySelector(".email-input");
const $emailInputWrapper = document.querySelector(".input-wrapper");

const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;

  return re.test(email);
};

$btn.addEventListener("click", (event) => {
  const emailValue = $emailInput.value;

  if (!validateEmail(emailValue)) {
    $emailInputWrapper.classList.add("error");
  } else {
    $emailInputWrapper.classList.remove("error");
  }
});
