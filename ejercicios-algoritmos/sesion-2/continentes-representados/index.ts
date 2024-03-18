type Registry = {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
};

export default function continentesRepresentados(
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
}
