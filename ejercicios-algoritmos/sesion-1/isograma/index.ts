export default function esIsograma(string: string): boolean {
  // TODO: implement
  const draft = string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[^a-z]/g, "");
  return new Set([...draft]).size === string.length;
}

// My solution
// const lowerCase = string.toLocaleLowerCase();
// const repeatWords = new Set([...lowerCase]);
// console.log(repeatWords);
// const splitWord = lowerCase.split("");
// if (splitWord.includes(" ")) {
//   return false;
// } else if (splitWord.length == Array.from(repeatWords).length) {
//   return true;
// }
// return false;

// 1st solution
