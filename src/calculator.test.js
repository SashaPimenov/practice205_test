const { add, subtract, multiply, divide } = require("./calculator");

test("1 + 2 = 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("5 - 2 = 3", () => {
  expect(subtract(5, 2)).toBe(3);
});

test("3 * 4 = 12", () => {
  expect(multiply(3, 4)).toBe(12);
});

test("10 / 2 = 5", () => {
  expect(divide(10, 2)).toBe(5);
});

test("F / d = NaN", () => {
  expect(divide("F", "d")).toBe(NaN);
});

test("Деление на 0 возвращает ошибку", () => {
  expect(() => divide(10, 0)).toThrow("Нельзя делить на 0");
});
