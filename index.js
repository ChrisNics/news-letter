const primary = document.getElementById('primary');
const secondary = document.getElementById('secondary');
const submitButton = document.getElementById('submit-button');
const dismissButton = document.getElementById('dismiss-button');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const userEmail = document.getElementById('user-email');

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

window.addEventListener('DOMContentLoaded', function () {
  var image = document.getElementById('dynamicImage');

  function updateImageSrc() {
    var screenWidth = window.innerWidth;

    if (screenWidth >= 1024) {
      image.src = '/assets/images/illustration-sign-up-desktop.svg';
    } else {
      image.src = '/assets/images/illustration-sign-up-mobile.svg';
    }
  }

  // Initial update
  updateImageSrc();

  // Update image source on window resize
  window.addEventListener('resize', updateImageSrc);
});

submitButton.addEventListener('click', () => {
  const isEmailValid = validateEmail(emailInput.value);
  if (isEmailValid) {
    secondary.classList.remove('hidden');
    primary.classList.add('hidden');

    userEmail.textContent = emailInput.value;
    emailInput.value = '';
    return;
  }

  errorMessage.classList.remove('hidden');
  emailInput.classList.add('error');
});

dismissButton.addEventListener('click', () => {
  secondary.classList.add('hidden');
  primary.classList.remove('hidden');
});

emailInput.addEventListener('focus', () => {
  errorMessage.classList.add('hidden');
  emailInput.classList.remove('error');
});
