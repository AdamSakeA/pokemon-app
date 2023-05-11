import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import ListSkills from "../list-skills";
import { mockPokemonTypes } from "../../__mocks__/apiMocks";

describe("List Skils", () => {
  let mockPokemon;
  beforeEach(() => {
    mockPokemon = mockPokemonTypes;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("render component loading", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <ListSkills payload={mockPokemonTypes} isLoading={true} />
        </MemoryRouter>
      </ThemeProvider>
    );
    const loading = screen.getByText(/Loading../);
    expect(loading).toBeInTheDocument();
  });

  test("render component when payload is passed", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <ListSkills payload={mockPokemonTypes} isLoading={false} />
        </MemoryRouter>
      </ThemeProvider>
    );
    const skillContainer = screen.getByTestId("skills-container");
    expect(skillContainer).toBeInTheDocument();
    const listSkill = screen.getByTestId("list-skills");
    expect(listSkill.children.length).toBe(mockPokemonTypes.results.length + 1);
  });

  test("filter the list of skills when skill button clicked", () => {
    const setTypeMock = jest.fn();
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <ListSkills
            payload={mockPokemonTypes}
            type=""
            setType={setTypeMock}
            isLoading={false}
          />
        </MemoryRouter>
      </ThemeProvider>
    );
    const normalButton = getByText("Normal");
    fireEvent.click(normalButton);
    expect(setTypeMock).toHaveBeenCalledWith("normal");
    const skillsList = getByTestId("list-skills");
    expect(skillsList.firstChild.getAttribute("type")).toBe("secondaryActive"); // only 1 skill and the "All" button
  });

  test("clear type when the all button is clicked", () => {
    const onClear = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <ListSkills
            payload={mockPokemonTypes}
            type="normal"
            setType={onClear}
            isLoading={false}
          />
        </MemoryRouter>
      </ThemeProvider>
    );
    const allButton = screen.getByRole("button", { name: /all/i });
    fireEvent.click(allButton);
    expect(onClear).toHaveBeenCalled();
  });
});
