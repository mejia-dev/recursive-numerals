import { romanNumerals } from "../src/js/romanNumerals.js";

describe (romanNumerals, () => {
  test("It will only accept input of the letters i, v, x, l, c, d, m", () => {
    expect(romanNumerals("invalid")).toEqual("Invalid Roman numerals detected. Please check your input and try again.");
  });
})