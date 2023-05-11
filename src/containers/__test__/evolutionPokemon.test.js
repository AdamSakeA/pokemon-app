import { fireEvent, render, screen } from "@testing-library/react";
import EvolutionPokemon from "../evolution-pokemon";
import { mockPokemonSearch } from "../../__mocks__/apiMocks";
import "@testing-library/jest-dom/extend-expect";

const mockedUsedNavigate = jest.fn();
jest.mock("../../utils/hooks");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Evolution Pokemon Component", () => {
  test("should render Evolution Pokemon data", () => {
    require("../../utils/hooks").useGetPokemonBySearch.mockReturnValue({
      pokemonSearch: mockPokemonSearch,
      isLoading: false,
      isError: false,
    });
    render(<EvolutionPokemon name="bulbasaur" />);
    const heading = screen.getByRole("heading", { name: /Bulbasaur/i });
    expect(heading).toBeInTheDocument();
  });

  test("should navigate when container is clicked", () => {
    require("../../utils/hooks").useGetPokemonBySearch.mockReturnValue({
      pokemonSearch: mockPokemonSearch,
      isLoading: false,
      isError: false,
    });
    render(<EvolutionPokemon name="bulbasaur" />);
    const container = screen.getByTestId("detail-evolution");
    expect(container).toBeInTheDocument();
    fireEvent.click(container);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/pokedex/bulbasaur");
  });

  test("should render loading skeleton when data is being fetched", () => {
    require("../../utils/hooks").useGetPokemonBySearch.mockReturnValue({
      pokemonSearch: null,
      isLoading: true,
      isError: false,
    });
    render(<EvolutionPokemon name="bulbasaur" />);
    const skeleton = screen.getByText("Loading...");
    expect(skeleton).toBeInTheDocument();
  });

  test("should render error message when an error occurs", () => {
    require("../../utils/hooks").useGetPokemonBySearch.mockReturnValue({
      pokemonSearch: null,
      isLoading: false,
      isError: true,
    });
    render(<EvolutionPokemon name="bulbasaur" />);
    const errorMessage = screen.getByText("Something Wrong..");
    expect(errorMessage).toBeInTheDocument();
  });
});
