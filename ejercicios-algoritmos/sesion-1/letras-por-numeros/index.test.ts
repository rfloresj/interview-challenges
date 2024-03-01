import { expect, describe, it } from "vitest";

import letrasPorNumeros from ".";

describe("letrasPorNumeros", () => {
  it("debería devolver la representanción en números", () => {
    expect(letrasPorNumeros("abc")).toBe("1 2 3");
  });

  it("debería omitir espacios", () => {
    expect(letrasPorNumeros("abc def")).toBe("1 2 3 4 5 6");
  });

  it("debería omitir mayúsculas", () => {
    expect(letrasPorNumeros("aBc def")).toBe("1 2 3 4 5 6");
  });

  it("debería omitir mayúsculas", () => {
    expect(letrasPorNumeros("aBc a defz")).toBe("1 2 3 1 4 5 6 26");
  });

  it("debería omitir mayúsculas", () => {
    expect(letrasPorNumeros("zYx w abCD ./")).toBe("26 25 24 23 1 2 3 4");
  });

  it("debería omitir mayúsculas", () => {
    expect(letrasPorNumeros("murciélago")).toBe("13 21 18 3 9 5 12 1 7 15");
  });
});
