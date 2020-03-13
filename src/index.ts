export const abbreviate = (number: number, decimalPlaces = 0) => {
  let letter = "";
  decimalPlaces = Math.pow(10, decimalPlaces);
  const abbrev = ["K", "M", "B", "T"];

  for (let i = abbrev.length - 1; i >= 0; i--) {
    const size = Math.pow(10, (i + 1) * 3);

    if (size <= number) {
      number = Math.round((number * decimalPlaces) / size) / decimalPlaces;

      if (number === 1000 && i < abbrev.length - 1) {
        number = 1;
        i++;
      }

      letter = abbrev[i];
      break;
    }
  }

  return number.toString() + letter;
};

export default abbreviate;
