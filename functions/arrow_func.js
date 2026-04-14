let sum = (a, b) => a + b;

let cal = (a, b, operator) => {
  if (operator == "+") {
    return a + b;
  } else if (operator == "-") {
    return a - b;
  }

};

console.log(cal(5, 8));
console.log(cal(5, 5, "-"));
