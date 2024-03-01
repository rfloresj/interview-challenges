const MAP2 = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export default function lettersPerNumbers(string: string): string {
  let draft = string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[^a-z]/g, "");

  // normalize("NFD") é e + ´

  console.log(draft);
  return Array.from(draft)
    .reduce((acc, letter) => acc.concat(`${MAP2.indexOf(letter) + 1} `), "")
    .trim();
}

// Solution 2

/* const MAP2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function lettersPerNumbers(string: string): string {
 let draft = string.replace(/\s/g, '').toLowerCase();
  console.log(draft)
  return  Array.from(draft)
    .reduce((acc, letter) => acc.concat(`${MAP2.indexOf(letter) + 1} `),"")
    .trim();
}

lettersPerNumbers("zYx w abCD");  */

// My solution
/* export default function lettersPerNumbers(string: string): string {
  let result: number[] = [];
  let alphabet = [
    "",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const onlyLetters: any = string.toLowerCase().match(/[a-z]/g);
  let numbersAlphabeth: number[] = alphabet.map((letters, index) => index + 1);

  for (let i = 0; i < string.length; i++) {
    if (onlyLetters[i] !== undefined) {
      result.push(alphabet.indexOf(onlyLetters[i]));
    }
  }
  return result.join(" ");
} */

// Solution 1

/* const MAP = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

export default function lettersPerNumbers(string: string): string {
 let draft = string.replace(/\s/g, '').toLowerCase();
  console.log(draft)
  // return draft.split("").map(letter => MAP[letter]).join(" ");
  return  Array.from(draft)
    .reduce((acc, letter) => acc.concat(`${MAP[letter]} `),"")
    .trim();
}

lettersPerNumbers("zYx w abCD ."); // returns '1 2 3 4 5 6';
 */
// Solution 2

/* const MAP2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function lettersPerNumbers(string: string): string {
 let draft = string.replace(/\s/g, '').toLowerCase();
  console.log(draft)
  return  Array.from(draft)
    .reduce((acc, letter) => acc.concat(`${MAP2.indexOf(letter) + 1} `),"")
    .trim();
}

lettersPerNumbers("zYx w abCD");  */
