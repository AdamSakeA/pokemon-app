import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import PokeCards from "../pokecard";
import { mockPokemonSearch } from "../../__mocks__/apiMocks";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
  mockedUsedNavigate.mockReset();
});

describe("Pokecard", () => {
  test("render component isLoading", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <PokeCards
            payload={mockPokemonSearch}
            isLoading={true}
            isNotFound={false}
          />
        </MemoryRouter>
      </ThemeProvider>
    );
    const pokecardSkeleton = screen.getByTestId("pokecard-skeleton");
    expect(pokecardSkeleton).toBeInTheDocument();
  });

  test("render component", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <PokeCards
            payload={mockPokemonSearch}
            isLoading={false}
            isNotFound={false}
          />
        </MemoryRouter>
      </ThemeProvider>
    );
    const pokecard = screen.getByTestId("pokecard");
    expect(pokecard).toBeInTheDocument();
  });

  test("onClick pokecards navigate to detail", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <PokeCards
            payload={mockPokemonSearch}
            isLoading={false}
            isNotFound={false}
          />
        </MemoryRouter>
      </ThemeProvider>
    );
    const pokecard = screen.getByTestId("pokecard");
    fireEvent.click(pokecard);
    expect(mockedUsedNavigate).toHaveBeenCalledWith(
      `/pokedex/${mockPokemonSearch.name}`
    );
  });
});
