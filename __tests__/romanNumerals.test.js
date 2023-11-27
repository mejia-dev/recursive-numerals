import { romanNumerals } from "../src/js/romanNumerals.js";

describe (romanNumerals, () => {
  test("It will only accept input of the letters i, v, x, l, c, d, m", () => {
    expect(romanNumerals("invalid")).toEqual("Invalid Roman numerals detected. Please check your input and try again.");
  });

  test("It will not accept input of double v (vv)", () => {
    expect(romanNumerals("vv")).toEqual("Invalid input. Numeral V should only occur once per input.");
  });

  test("It will not accept input of double L (LL)", () => {
    expect(romanNumerals("ll")).toEqual("Invalid input. Numeral L should only occur once per input.");
  });

  test("It will not accept input of double D (DD)", () => {
    expect(romanNumerals("dd")).toEqual("Invalid input. Numeral D should only occur once per input.");
  });

  test("It will ensure that V, L, and D do not occur more than once in an input", () => {
    expect(romanNumerals("viv")).toEqual("Invalid input. Numeral V should only occur once per input.");
    expect(romanNumerals("lil")).toEqual("Invalid input. Numeral L should only occur once per input.");
    expect(romanNumerals("did")).toEqual("Invalid input. Numeral D should only occur once per input.");
  });
})