type Registry = {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
  greet?: string;
};

const CONTINENTS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export function continentesRepresentados(array: Registry[]): boolean {
  let buffer = new Set();
  for (const { continent } of array) {
    buffer.add(continent);
    if (buffer.size === CONTINENTS.length) {
      return true;
    }
  }
  return false;
}

export function developerJavaScriptDeEurope(array: Registry[]): number {
  return array.filter(
    (registry) =>
      registry.continent === "Europe" && registry.language === "JavaScript"
  ).length;
}

export function greetDeveloper(array: Registry[]): Registry[] {
  return array.map((registry) => ({
    ...registry,
    greet: `Hi ${registry.firstName}, what do you like the most about ${registry.language}?`,
  }));
}

//My solution
/* export default function continentesRepresentados(
  array: Registry[]
): boolean | undefined {
  // TODO: implement
  let everyContinent = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  for (let i = 0; i < array.length; i++) {
    return everyContinent[i].indexOf(array[i].continent) !== -1 &&
      everyContinent.length === array.length
      ? true
      : false;
  }
} */

//Solution Gonzy

/* export default function continentesRepresentados(array: Registry[]): boolean {
  // TODO: implement
  const continents = new Set([...array.map(({ continent }) => continent)]);
  const isRepresented = CONTINENTS.every((continent) =>
    continents.has(continent)
  );

  return isRepresented;
} */

//3rd Solution

/* export default function continentesRepresentados(array: Registry[]): boolean {
  let buffer = new Set();
  for (const { continent } of array) {
    buffer.add(continent);
    if (buffer.size === CONTINENTS.length) {
      return true;
    }
  }
  return false;
} */
