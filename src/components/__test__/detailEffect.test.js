import { render, screen } from "@testing-library/react";
import { mockEffect } from "../../__mocks__/apiMocks";
import "@testing-library/jest-dom/extend-expect";
import DetailEffect from "../detail-effect";

test("render component detail effect", () => {
  render(<DetailEffect data={mockEffect} />);
  const heading = screen.getByRole("heading", { name: /Grass/i });
  expect(heading).toBeInTheDocument();
  const content = screen.getByTestId("content-effect");
  expect(content).toBeInTheDocument();
});
