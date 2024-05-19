export default function buscarAislado(numeros: number[]): number {
  // TODO: implementar
  const aisladoEsPar = numeros.filter((numero) => numero % 2 === 0).length === 1;

  return numeros.find((numero) => (aisladoEsPar ? numero % 2 === 0 : numero % 2 !== 0)) as number;
}

// MY SOLUTION
/* export default function buscarAislado(numeros: number[]): number {
  let sum1 = 0;
  let sum2 = 0;

  let sumEvenNumbers = 0;
  let sumOddNumbers = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      sumEvenNumbers += numeros[i];
      sum1 += i;
    } else {
      sumOddNumbers += numeros[i];
      sum2 += i;
    }
  }
  console.log(sumEvenNumbers, sumOddNumbers);
  return sum1 > sum2 ? sumOddNumbers : sumEvenNumbers;
} */
