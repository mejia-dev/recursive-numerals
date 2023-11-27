export const romanNumerals = (input) => {
  if (!input.match(/^[ivxlcdm]+$/i)) {
    return "Invalid Roman numerals detected. Please check your input and try again."
  } else if (input.includes("vv")) {
    return "Invalid input. Numeral V should only occur once per input."
  } else if (input.includes("ll")) {
    return "Invalid input. Numeral L should only occur once per input."
  }
}