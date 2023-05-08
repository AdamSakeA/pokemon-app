import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Pokedex from "../pokedex/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({});

const setup = () => {
  render(
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Pokedex />
        </QueryClientProvider>
      </MemoryRouter>
    </ThemeProvider>
  );
};

describe("Pokedex Page", () => {
  beforeEach(() => {
    setup();
  });

  test("render Layout and components", () => {
    const titlePokedex = screen.getByRole("heading", {
      name: /search pokemon!/i,
    });

    expect(titlePokedex).toBeInTheDocument();
  });
});
