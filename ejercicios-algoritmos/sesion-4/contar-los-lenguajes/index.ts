import type { Developer } from "./types";

export default function contarLosLenguajes(developers: Developer[]): Record<string, number> {
  // TODO: implementar
  return developers.reduce((languages, {language}) => {
    if(!languages[language]){
      languages[language] = 0
    }
    
    languages[language]++
    // {}
    return languages;
  }, {})
}
