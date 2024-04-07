export default function moverCeros(array: unknown[]): unknown[] {
  // TODO: implement
  let newArray: unknown[] = [];
  let newArray2: unknown[] = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      newArray.push(array[i] as number);
    } else {
      newArray2.push(array[i]);
    }
  }
  return newArray2.concat(newArray);
}
