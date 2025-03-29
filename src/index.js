const { add, subtract, multiply, divide } = require("./calculator");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askForNumber(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (input) => {
      const number = parseFloat(input);
      if (isNaN(number)) {
        console.log("Пожалуйста, введите корректное число.");
        resolve(askForNumber(prompt));
      } else {
        resolve(number);
      }
    });
  });
}

function askQuestion() {
  rl.question(
    'Введите операцию: +, -, *, / или "Выход", чтобы выйти: ',
    async (operation) => {
      if (operation === "Выход") {
        rl.close();
        return;
      }

      if (!["+", "-", "*", "/"].includes(operation)) {
        console.log("Некорректный ввод операции");
        askQuestion();
        return;
      }

      const num1 = await askForNumber("Введите первое число: ");
      const num2 = await askForNumber("Введите второе число: ");
      let result;

      switch (operation) {
        case "+":
          result = add(num1, num2);
          break;
        case "-":
          result = subtract(num1, num2);
          break;
        case "*":
          result = multiply(num1, num2);
          break;
        case "/":
          try {
            result = divide(num1, num2);
          } catch (e) {
            console.log("Ошибка деления на 0");
            askQuestion();
            return;
          }
          break;
      }

      console.log(`Результат: ${result}`);
      askQuestion();
    }
  );
}

askQuestion();
