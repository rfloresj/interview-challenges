import type { Developer } from "./types";

export default function contarLosLenguajes(developers: Developer[]): Record<string, number> {
  const languages = {};
  for (const { language } of developers) {
    if (!languages.hasOwnProperty(language)) {
      languages[language] = 0;
    }
    languages[language]++;
  }
  return languages;
}

// Gonzy 1st solution

// import type { Developer } from "./types";

// export default function contarLosLenguajes(developers: Developer[]): Record<string, number> {
//   // TODO: implementar
//   return developers.reduce((languages, {language}) => {
//     if(!languages[language]){
//       languages[language] = 0
//     }

//     languages[language]++
//     // {}
//     return languages;
//   }, {})
// }

// Gonzy 2nd solution

// import type { Developer } from "./types";

// export default function contarLosLenguajes(developers: Developer[]): Record<string, number> {
//   const languages = new Map();
//   for (const { language } of developers) {
//     if (!languages.has(language)) {
//       languages.set(language, 0);
//     }
//     languages.set(language, languages.get(language) + 1);
//   }
//   return Object.fromEntries(languages.entries());
// }
