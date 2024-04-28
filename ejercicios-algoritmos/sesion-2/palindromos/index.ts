export default function posiblePalindromo(num: number): boolean {
  // "1221"
  const map = String(num)
    // ["1", "2", "2", "1"]
    .split("")
    // {"1": true, "2": true}
    .reduce(
      (acc, num) => ({
        ...acc,
        [num]: acc[num] === undefined ? false : !acc[num],
      }),
      {}
    );
  // [true, true]
  const valids = Object.values(map);

  // -1, -1 -> true
  return valids.indexOf(false) === valids.lastIndexOf(false);
}

// export default function posiblePalindromo(num: number): boolean {
//   // TODO: implement
//   const result = Object.values(
//     String(num)
//       .split("")
//       .reduce(
//         (acc, num) => ({
//           ...acc,
//           [num]: acc[num] === undefined ? true : !acc[num],
//         }),
//         {}
//       )
//   );

//   return result.indexOf(false) === result.lastIndexOf(false);
// }
