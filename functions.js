// function greetings(name, course, param3) {
//     console.log(`Good morning ${name}, I am a ${course} student`)
// }

// greetings("Samuel", "Javascript")
// greetings("Emeka", "UI/UX")

function calculator(num1, num2, operator) {
  result = "";

  if (operator == "+") {
    result = num1 + num2;
  } else if (operator == "-") {
    result = num1 - num2;
  } else if (operator == "*") {
    result = num1 * num2;
  } else if (operator == "/") {
    result = num1 / num2;
  } else {
    result = "undefined operator";
  }

  console.log(result);
}

// calculator(5, 10, "+");
// calculator(10, 5, "-");
// calculator(10, 5, "*");
// calculator(10, 5, "/");

function timestable(table) {
  for (let i = 1; i <= 12; i++) {
    console.log(`${table} x ${i} = ${table * i}`);
  }

  console.log("\n");
}

for(let k = 2; k <= 5; k++)
{
    timestable(k)
}


