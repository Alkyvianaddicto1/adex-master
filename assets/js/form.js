document.getElementById('user-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Array of validation functions
  const validations = [
    validateName(document.getElementById('first-name').value.trim()),
    validateName(document.getElementById('last-name').value.trim()),
    validateEmail(document.getElementById('email').value.trim()),
    validatePhone(document.getElementById('phone').value.trim())
  ];

  // Check if all validations pass
  const isValid = validations.every(validation => validation === true);

  if (isValid) {
    window.location.href = 'success.html'; // Redirect to success page
  } else {
    alert('Please correct the highlighted fields.');
  }
});

// Validate name (no special characters or numbers)
function validateName(name) {
  const namePattern = /^[a-zA-Z\s]+$/;
  if (!namePattern.test(name)) {
    highlightError('Name must contain only letters and spaces.');
    return false;
  }
  return true;
}

// Validate email
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    highlightError('please enter a valid email');
    return false;
  }
  return true;
}

// Validate phone number (only digits allowed)
function validatePhone(phone) {
  const phonePattern = /^[0-9]+$/;
  if (!phonePattern.test(phone)) {
    highlightError('Phone number must contain only digits.');
    return false;
  }
  return true;
}

// Function to highlight error fields (you can customize this to your needs)
function highlightError(message) {
  alert(message); // You can customize how errors are displayed
}
