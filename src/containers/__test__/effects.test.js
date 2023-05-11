import { render, screen } from "@testing-library/react";
import Effects from "../effects";
import { mockEffect } from "../../__mocks__/apiMocks";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../../utils/hooks");

describe("Effects Component", () => {
  test("should render Effects data", () => {
    require("../../utils/hooks").useGetPokemonByType.mockReturnValue({
      pokemonByType: mockEffect,
      isLoading: false,
      isError: false,
    });
    render(<Effects effect="grass" />);
    const heading = screen.getByRole("heading", { name: /Grass/i });
    expect(heading).toBeInTheDocument();
  });

  test("should render loading skeleton when data is being fetched", () => {
    require("../../utils/hooks").useGetPokemonByType.mockReturnValue({
      pokemonByType: null,
      isLoading: true,
      isError: false,
    });
    render(<Effects effect="grass" />);
    const skeleton = screen.getByTestId("detail-effect-skeleton");
    expect(skeleton).toBeInTheDocument();
  });

  test("should render error message when an error occurs", () => {
    require("../../utils/hooks").useGetPokemonByType.mockReturnValue({
      pokemonByType: null,
      isLoading: false,
      isError: true,
    });
    render(<Effects effect="grass" />);
    const errorMessage = screen.getByText("Something Wrong..");
    expect(errorMessage).toBeInTheDocument();
  });
});
