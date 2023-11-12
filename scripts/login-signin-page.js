const $ = document;

const formSelector = $.querySelector(`#form`);
const formInputSelector = $.querySelector(`#form-input`);
const formSubmitBtnSelector = $.querySelector(`#form-submit`);

const phoneNumberRegex = /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/;
const emailRegex = /^[a-zA-Z0-9.-]+@[a-z-]+\.[a-z]{2,3}$/;

let phoneCheckResult = null;
let emailCheckResult = null;

formInputSelector.addEventListener(`keyup`, (e) => {
  phoneCheckResult = phoneNumberRegex.test(formInputSelector.value);
  emailCheckResult = emailRegex.test(formInputSelector.value);

  if (phoneCheckResult || emailCheckResult) {
    formSubmitBtnSelector.style.backgroundColor = `#00a2a4`;
    formSubmitBtnSelector.style.cursor = `pointer`;
  } else {
    formSubmitBtnSelector.style.backgroundColor = `#9e9e9e`;
    formSubmitBtnSelector.style.cursor = `unset`;
  }
});
