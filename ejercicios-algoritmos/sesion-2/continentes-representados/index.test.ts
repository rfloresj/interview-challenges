import { expect, describe, it } from "vitest";

import {
  continentesRepresentados,
  developerJavaScriptDeEurope,
  greetDeveloper,
  continentesPresentes,
} from ".";

describe("continentesRepresentados", () => {
  it("debería devolver true si todos los continentes están representados", () => {
    expect(
      continentesRepresentados([
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Africa",
          age: 25,
          language: "JavaScript",
        },
        {
          firstName: "Agustín",
          lastName: "M.",
          country: "Chile",
          continent: "Americas",
          age: 37,
          language: "C",
        },
        {
          firstName: "Jing",
          lastName: "X.",
          country: "China",
          continent: "Asia",
          age: 39,
          language: "Ruby",
        },
        {
          firstName: "Laia",
          lastName: "P.",
          country: "Andorra",
          continent: "Europe",
          age: 55,
          language: "Ruby",
        },
        {
          firstName: "Oliver",
          lastName: "Q.",
          country: "Australia",
          continent: "Oceania",
          age: 65,
          language: "PHP",
        },
      ])
    ).toBe(true);
  });
});

describe("developerJavascriptFromEurope", () => {
  it("debería devolver la cantidad de JavaScript developers que viene de Europa", () => {
    expect(
      developerJavaScriptDeEurope([
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Africa",
          age: 25,
          language: "JavaScript",
        },
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Europe",
          age: 25,
          language: "JavaScript",
        },
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Europe",
          age: 25,
          language: "JavaScript",
        },
      ])
    ).toBe(2);

    expect(
      developerJavaScriptDeEurope([
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Africa",
          age: 25,
          language: "JavaScript",
        },
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Europe",
          age: 25,
          language: "JavaScript",
        },
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Europe",
          age: 25,
          language: "Ruby",
        },
      ])
    ).toBe(1);
  });
});

describe("greetDeveloper", () => {
  it("debería devolver la cantidad de JavaScript developers que viene de Europa", () => {
    expect(
      greetDeveloper([
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Africa",
          age: 25,
          language: "JavaScript",
        },
      ])
    ).toEqual([
      {
        firstName: "Fatima",
        lastName: "A.",
        country: "Algeria",
        continent: "Africa",
        age: 25,
        language: "JavaScript",
        greet: `Hi Fatima, what do you like the most about JavaScript?`,
      },
    ]);
  });
});

describe("continentesPresentes", () => {
  it("debería devolver la cantidad de JavaScript developers que viene de Europa", () => {
    expect(
      continentesPresentes([
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Africa",
          age: 25,
          language: "JavaScript",
        },
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Africa",
          age: 25,
          language: "JavaScript",
        },
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Americas",
          age: 25,
          language: "Ruby",
        },
      ])
    ).toMatchObject(["Africa", "Americas"]);
  });
});
