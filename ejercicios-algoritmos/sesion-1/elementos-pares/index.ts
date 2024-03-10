export default function filtrarPares(array: string[]): string[] {
  const appearances = array.reduce((map, letter) => {
    if (!map[letter]) {
      map[letter] = 0;
    }
    map[letter]++;
    return map;
  }, {});

  return Object.keys(appearances).filter(
    (letter) => appearances[letter] % 2 === 0
  );
}

// My solution

// export default function filtrarPares(
//   array: Array<string | number>
// ): Array<string | number> {
//   // TODO: implement
//   const duplicateItems = array.filter(
//     (element, index) => array.indexOf(element) !== index
//   );
//   const onlyDuplicates = new Set(duplicateItems);
//   return [...onlyDuplicates];
// }

// Goncy solution

// export default function filtrarPares(array: string[]): string[] {
//   const appearances = array.reduce((map, letter) => {
//     if (!map[letter]) {
//       map[letter] = 0;
//     }
//     map[letter]++;
//     return map;
//   }, {});

//   const elements = Object.entries(appearances);

//   return elements.reduce((onlyPairRepeated, [letter, appearances]) => {
//     Number(appearances) % 2 === 0
//       ? onlyPairRepeated.push(String(letter))
//       : null;

//     return onlyPairRepeated;
//   }, []);
// }
// Goncy solution 2
// export default function filtrarPares(array: string[]): string[] {
//   const appearances = array.reduce((map, letter) => {
//     if (!map[letter]) {
//       map[letter] = 0;
//     }
//     map[letter]++;
//     return map;
//   }, {});

//   return Object.keys(appearances).filter(
//     (letter) => appearances[letter] % 2 === 0
//   );
// }
