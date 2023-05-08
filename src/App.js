import React from "react";
import { Routes, Route } from "react-router-dom";

// styled components
import { GlobalStyle } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

// react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// pages
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:pokemonId" element={<DetailPokemon />} />
          <Route path="*" element={<PageError />} />
        </Routes>
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
