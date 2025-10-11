// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import { inverser } from "../index";

describe("inverser", () => {
  it("devrait inverser un tableau de plusieurs éléments", () => {
    expect(inverser([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  });

  it("devrait inverser un tableau vide", () => {
    expect(inverser([])).toEqual([]);
  });

  it("devrait inverser un tableau avec un seul élément", () => {
    expect(inverser([42])).toEqual([42]);
  });

  it("devrait inverser un tableau avec des éléments négatifs", () => {
    expect(inverser([-1, -2, -3])).toEqual([-3, -2, -1]);
  });

  it("devrait inverser un tableau avec des éléments identiques", () => {
    expect(inverser([5, 5, 5])).toEqual([5, 5, 5]);
  });
});
