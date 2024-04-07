export default function moverCeros(array: unknown[]): unknown[] {
  // TODO: implement
  const zeros: number[] = [];
  const noZeros: unknown[] = [];
  for (const elem of array) {
    if (elem === 0) {
      zeros.push(elem);
    } else {
      noZeros.push(elem);
    }
  }
  return [...noZeros, ...zeros];
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
// }
