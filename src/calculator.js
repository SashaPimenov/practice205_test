function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// test build 2

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Нельзя делить на 0");
  }
  return a / b;
}
module.exports = { add, subtract, multiply, divide };
