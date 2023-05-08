import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import HomePage from "..";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const setup = () => {
  mockedUsedNavigate.mockReset();
  render(
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    </ThemeProvider>
  );
};

describe("HomePage", () => {
  beforeEach(() => {
    setup();
  });
  test("renders Layout and Home components", () => {
    const homeElement = screen.getByRole("heading", {
      name: /wanna know any pokemon\?/i,
    });
    const descHomeElement = screen.getByText(
      /we share about pokemon monsters by skills in pokedex, if you want to know pokemon detail just click the card/i
    );
    const buttonGoToPokedex = screen.getByRole("button", {
      name: /go to pokedex/i,
    });
    expect(homeElement).toBeInTheDocument();
    expect(descHomeElement).toBeInTheDocument();
    expect(buttonGoToPokedex).toBeInTheDocument();
  });

  test("onClick button pokedex", () => {
    const buttonGoToPokedex = screen.getByRole("button", {
      name: /go to pokedex/i,
    });

    fireEvent.click(buttonGoToPokedex);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/pokedex");
  });
});
