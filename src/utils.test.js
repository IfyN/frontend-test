import { data } from "../data";
import { sortByAlphabet, sortByPrice, sortByRating } from "./utils";

describe("utils", () => {
  test("sortByAlphabet sorts resorts alphabetically", () => {
    const result = sortByAlphabet(data);
    const expected = [data[1], data[0], data[2]];
    expect(result).toEqual(expected);
  });

  test("sortByPrice sorts resorts according to their price", () => {
    const result = sortByPrice(data);
    const expected = [data[2], data[1], data[0]];
    expect(result).toEqual(expected);
  });

  test("sortByRating sorts resorts according to their ratings", () => {
    const result = sortByRating(data);
    const expected = [data[0], data[1], data[2]];
    expect(result).toEqual(expected);
  });
});
