import React from "react";
import { Routes, Route } from "react-router-dom";

// styled components
import { GlobalStyle } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { THEME } from "./styles/theme";

// react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import HomePage from "./pages";
import Pokedex from "./pages/pokedex";
import DetailPokemon from "./pages/detail-pokemon";
import PageError from "./pages/_notfound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:pokemonId" element={<DetailPokemon />} />
          <Route path="*" element={<PageError />} />
        </Routes>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
