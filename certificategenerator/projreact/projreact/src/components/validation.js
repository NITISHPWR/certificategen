// validation.js

// Function to check if a value is an integer
function isInteger(value) {
  return /^\d+$/.test(value);
}

// Function to validate integer input
export function validateIntegerInput(value) {
  if (!isInteger(value)) {
    return "Please enter a valid integer.";
  }
  return ""; // No error
}
