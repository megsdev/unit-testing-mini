const functionsFile = require("./functions.js");

test("returnTwo() should return 2.", () => {
  expect(functionsFile.returnTwo()).toEqual(2);
});

test("greeting() should return a dynamic greeting based on name.", () => {
  expect(functionsFile.greeting("James")).toEqual("Hello, James.");
  expect(functionsFile.greeting("Jill")).toEqual("Hello, Jill.");
});

describe("math functions should return correct values:", () => {
  test("add() should return a dynamic sum based on two number parameters.", () => {
    expect(functionsFile.add(1, 2)).toEqual(3);
    expect(functionsFile.add(5, 9)).toEqual(14);
  });
  test("multiply() should return a dynamic product based on two number parameters.", () => {
    expect(functionsFile.multiply(1, 2)).toEqual(2);
    expect(functionsFile.multiply(5, 9)).toEqual(45);
  });
  test("divide() should return a dynamic division based on two number parameters.", () => {
    expect(functionsFile.divide(2, 1)).toEqual(2);
    expect(functionsFile.divide(9, 3)).toEqual(3);
  });
  test("subtract() should return a dynamic subtraction based on two number parameters.", () => {
    expect(functionsFile.subtract(5, 2)).toEqual(3);
    expect(functionsFile.subtract(9, 3)).toEqual(6);
  });
});
