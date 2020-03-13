export type AbbreviationOptions = {
  number: number;
  decimalPlaces: number;
};

export const abbreviation = ({
  number,
  decimalPlaces = 0
}: AbbreviationOptions) => {

  
  // // 2 decimal places => 100, 3 => 1000, etc
  // decimalPlaces = Math.pow(10, decimalPlaces);
  // // Enumerate number abbreviations
  // const abbrev = ["K", "M", "B", "T"];
  // // Go through the array backwards, so we do the largest first
  // for (let i = abbrev.length - 1; i >= 0; i--) {
  //   // Convert array index to "1000", "1000000", etc
  //   const size = Math.pow(10, (i + 1) * 3);
  //   // If the number is bigger or equal do the abbreviation
  //   if (size <= number) {
  //     // Here, we multiply by decPlaces, round, and then divide by decPlaces.
  //     // This gives us nice rounding to a particular decimal place.
  //     number = Math.round((number * decimalPlaces) / size) / decimalPlaces;
  //     // Handle special case where we round up to the next abbreviation
  //     if (number === 1000 && i < abbrev.length - 1) {
  //       number = 1;
  //       i++;
  //     }
  //     // Add the letter for the abbreviation
  //     number += abbrev[i];
  //     // We are done... stop
  //     break;
  //   }
  // }
  // return number;
};
