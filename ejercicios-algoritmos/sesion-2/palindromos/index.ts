export default function posiblePalindromo(num: number): boolean {
  // TODO: implement
  const result = Object.values(
    String(num)
      .split("")
      .reduce(
        (acc, num) => ({
          ...acc,
          [num]: acc[num] === undefined ? true : !acc[num],
        }),
        {}
      )
  );

  return result.indexOf(false) === result.lastIndexOf(false);
}
