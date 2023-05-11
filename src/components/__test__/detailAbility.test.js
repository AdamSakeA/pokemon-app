import { render, screen } from "@testing-library/react";
import DetailAbility from "../detail-ability";
import { mockAbility } from "../../__mocks__/apiMocks";
import "@testing-library/jest-dom/extend-expect";

test("render detail ability", () => {
  render(<DetailAbility data={mockAbility} />);
  const heading = screen.getByRole("heading", { name: /Overgrow/i });
  expect(heading).toBeInTheDocument();
  const desc = screen.getByText(
    /when this pokémon has 1\/3 or less of its hp remaining, its grass\-type moves inflict 1\.5× as much regular damage\./i
  );
  expect(desc).toBeInTheDocument();
});
