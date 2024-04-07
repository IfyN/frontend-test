import "@testing-library/jest-dom";
import { render, screen} from "@testing-library/react";
import { data } from "../../data";
import { Infobox } from "./infobox";

describe("infobox", () => {
  test("renders correctly", () => {
    render(<Infobox {...data[0]} />);
    const name = screen.getByText(data[0].name);
    const starRatings = screen.getAllByTestId("star_rating");

    expect(starRatings.length).toBe(data[0].rating);
    expect(name).toBeInTheDocument();
  });
});
