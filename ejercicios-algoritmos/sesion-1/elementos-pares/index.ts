export default function filtrarPares(array: string[]): string[] {
  // TODO: implement
  const appearances = array.reduce((map, letter) => {
    if (!map[letter]) {
      map[letter] = 0;
    }

    map[letter]++;

    return map;
  }, {});

  const elements = Object.entries(appearances);

  return elements.reduce((moreItems: string[], [letter, appearances]) => {
    if (Number(appearances) % 2 === 0) {
      moreItems.push(String(letter));
    }

    return moreItems;
  }, []);
}
