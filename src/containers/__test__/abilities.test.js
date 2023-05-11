import { render, screen } from "@testing-library/react";
import Abilities from "../abilities";
import { mockAbility } from "../../__mocks__/apiMocks";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../../utils/hooks");

describe("Abilities Component", () => {
  test("should render abilities data", () => {
    require("../../utils/hooks").useGetPokemonAbility.mockReturnValue({
      abilities: mockAbility,
      isLoading: false,
      isError: false,
    });
    render(<Abilities ability="overgrow" />);
    const heading = screen.getByRole("heading", { name: /Overgrow/i });
    expect(heading).toBeInTheDocument();
  });

  test("should render loading skeleton when data is being fetched", () => {
    require("../../utils/hooks").useGetPokemonAbility.mockReturnValue({
      abilities: null,
      isLoading: true,
      isError: false,
    });
    render(<Abilities ability="overgrow" />);
    const skeleton = screen.getByTestId("detail-ability-skeleton");
    expect(skeleton).toBeInTheDocument();
  });

  test("should render error message when an error occurs", () => {
    require("../../utils/hooks").useGetPokemonAbility.mockReturnValue({
      abilities: null,
      isLoading: false,
      isError: true,
    });
    render(<Abilities ability="overgrow" />);
    const errorMessage = screen.getByText("Something Wrong..");
    expect(errorMessage).toBeInTheDocument();
  });
});
