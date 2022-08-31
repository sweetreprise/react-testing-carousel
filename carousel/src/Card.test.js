import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("renders component without crashing", function() {
    render(<Card />);
  });

test("it matches snapshot", () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});