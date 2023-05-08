import React, { useState } from "react";

// styles
import { Header, Contents } from "./pokedex.styles";

// components and containers for contents
import { Layout, Search, Button } from "../../components";
import {
  ListSkills,
  PaginationPokedex,
  ListPokedexBySkill,
  ListPokedex,
} from "../../containers";

// hooks
import { useGetPokemonList, useGetPokemonSkills } from "../../utils/hooks";

export default function Pokedex() {
  const [type, setType] = useState(""); // type of skill filtered
  const [pokemonName, setPokemonName] = useState(""); // search pokemon

  // hooks
  const { pokemonList, fetchNextPage, isFetching } = useGetPokemonList();
  const { pokemonSkills, isLoading } = useGetPokemonSkills();

  const handleWindowsToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  let showPokedex;
  if (!type && !pokemonName) {
    // get all pokemon cards
    showPokedex = (
      <PaginationPokedex
        payload={pokemonList}
        fetchNextPage={fetchNextPage}
        isFetching={isFetching}
      />
    );
  } else if (!pokemonName) {
    // get pokemon by skill
    showPokedex = <ListPokedexBySkill type={type} />;
  } else {
    // get pokemon by search
    showPokedex = <ListPokedex name={pokemonName} />;
  }

  return (
    <Layout title={"Pokemon List"}>
      <Header>
        <h1>Search Pokemon!</h1>
        <Search setPokemonName={setPokemonName} />
      </Header>
      <ListSkills
        payload={pokemonSkills}
        type={type}
        setType={setType}
        isLoading={isLoading}
      />
      <Contents>{showPokedex}</Contents>
      <Button type="backToTop" onClick={() => handleWindowsToTop()}>
        Back to top
      </Button>
    </Layout>
  );
}
