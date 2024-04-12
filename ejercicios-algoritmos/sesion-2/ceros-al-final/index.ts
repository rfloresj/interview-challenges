export default function moverCeros(array: unknown[]): unknown[] {
  // TODO: implement
  const newArray = array.reduce<[unknown[], unknown[]]>(
    (acc, elem) => {
      if (elem === 0) {
        return [acc[0], acc[1].concat(0)];
      } else {
        return [acc[0].concat(elem), acc[1]];
      }
    },
    [[], []]
  );
  return newArray.flat();
}

// My solution

// export default function moverCeros(array: unknown[]): unknown[] {
//   // TODO: implement
//   let newArray: unknown[] = [];
//   let newArray2: unknown[] = []
//   for(let i = 0; i < array.length; i++){
//     if(array[i] === 0){
//       newArray.push(array[i])
//     } else {
//       newArray2.push(array[i])
//     }
//   }
//   return newArray2.concat(newArray)
//
// Gonzy solution 1
// export default function moverCeros(array: unknown[]): unknown[] {
//   // TODO: implement
//   const zeros: number[] = [];
//   const noZeros: unknown[] = [];
//   for (const elem of array) {
//     if (elem === 0) {
//       zeros.push(elem);
//     } else {
//       noZeros.push(elem);
//     }
//   }
//   return [...noZeros, ...zeros];
// }
// Gonzy solution 2
// export default function moverCeros(array: unknown[]): unknown[] {
//   // TODO: implement
//   const newArray = array.reduce<[unknown[], unknown[]]>((acc, elem) => {
//     if(elem === 0){
//       return [acc[0], acc[1].concat(0)];
//     } else {
//       return [acc[0].concat(elem), acc[1]];
//     }
//   },[[],[]])
//   return newArray.flat();
// }
// Gonzy solution 3
// export default function moverCeros(array: unknown[]): unknown[] {
//   // TODO: implement
//   const {ceros, sinCeros} = array.reduce<{ceros: unknown[], sinCeros: unknown[]}>(({ceros, sinCeros}, elem) => {
//     if(elem === 0){
//       return {ceros: ceros.concat(0), sinCeros};
//     } else {
//       return {sinCeros: sinCeros.concat(elem), ceros};
//     }
//   },{ceros: [], sinCeros: []})
//   return [...sinCeros, ...ceros]
// }
// Gonzy solution 3 re-factor
// export default function moverCeros(array: unknown[]): unknown[] {
//   // TODO: implement
//   const {ceros, sinCeros} = array.reduce<{ceros: unknown[], sinCeros: unknown[]}>(({ceros, sinCeros}, elem) =>
//     elem === 0
//     ? {ceros: ceros.concat(0), sinCeros}
//     : {sinCeros: sinCeros.concat(elem), ceros},
//     {ceros: [], sinCeros: []})
//   return [...sinCeros, ...ceros]
// }
