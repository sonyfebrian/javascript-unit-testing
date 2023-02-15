const { printNumbers } = require("../src/printNumbers");
const { sortArray } = require("../src/sortArray");
const { inputString } = require("../src/inputString");

describe("printNumbers", () => {
  it("should print numbers correctly", () => {
    const mockConsole = jest.spyOn(console, "log");

    printNumbers(10);

    expect(mockConsole.mock.calls[0][0]).toBe(1);
    expect(mockConsole.mock.calls[1][0]).toBe(2);
    expect(mockConsole.mock.calls[2][0]).toBe("fish");
    expect(mockConsole.mock.calls[4][0]).toBe("bash");

    mockConsole.mockRestore();
  });
});

describe("sortArray", () => {
  test("sorts array in ascending order", () => {
    const arr = [3, 1, 4, 2];
    const sortOrder = "asc";
    const expected = [1, 2, 3, 4];

    expect(sortArray(arr, sortOrder)).toEqual(expected);
  });

  test("sorts array in descending order", () => {
    const arr = [3, 1, 4, 2];
    const sortOrder = "desc";
    const expected = [4, 3, 2, 1];

    expect(sortArray(arr, sortOrder)).toEqual(expected);
  });
});

describe("inputString", () => {
  test("returns true for palindrome strings", () => {
    expect(inputString("racecar")).toBe(true);
  });

  test("returns false for non-palindrome strings", () => {
    expect(inputString("hello")).toBe(false);
  });
});
