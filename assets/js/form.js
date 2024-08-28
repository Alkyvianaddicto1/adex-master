document.getElementById('user-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Clear previous error messages
  clearErrors();

  // Array of validation functions
  const validations = [
    validateName(document.getElementById('first-name')),
    validateName(document.getElementById('last-name')),
    validateEmail(document.getElementById('email')),
    validatePhone(document.getElementById('phone'))
  ];

  // Check if all validations pass
  const isValid = validations.every(validation => validation === true);

  if (isValid) {
    window.location.href = 'success.html'; // Redirect to success page
  }
});

// Validate name (no special characters or numbers)
function validateName(inputElement) {
  const namePattern = /^[a-zA-Z\s]+$/;
  if (!namePattern.test(inputElement.value.trim())) {
    highlightError(inputElement, 'Name must contain only letters and spaces.');
    return false;
  }
  return true;
}

// Validate email
function validateEmail(inputElement) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(inputElement.value.trim())) {
    highlightError(inputElement, 'Please enter a valid email.');
    return false;
  }
  return true;
}

// Validate phone number (only digits allowed, optional leading +)
function validatePhone(inputElement) {
  const phonePattern = /^\+?[0-9]+$/;
  if (!phonePattern.test(inputElement.value.trim())) {
    highlightError(inputElement, 'Phone number must contain only digits and can start with a +.');
    return false;
  }
  return true;
}

// Function to highlight error fields with styling
function highlightError(inputElement, message) {
  const errorMessage = document.createElement('p');
  errorMessage.textContent = message;
  errorMessage.classList.add('error-message'); // Add CSS class for styling
  inputElement.parentElement.appendChild(errorMessage);
}

// Function to clear previous errors
function clearErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(errorMessage => errorMessage.remove());
}
