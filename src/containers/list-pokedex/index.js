import React from "react";
import { PokeCards } from "../../components";
import { useGetPokemonBySearch } from "../../utils/hooks";

export default function ListPokedex({ name }) {
  const { pokemonSearch, isLoading, isNotFound } = useGetPokemonBySearch(
    `/card/${name}`,
    name
  );

  if (isNotFound)
    return (
      <h1>
        {name} is {pokemonSearch}
      </h1>
    );

  return (
    <PokeCards
      payload={pokemonSearch}
      isLoading={isLoading}
      isNotFound={isNotFound}
    />
  );
}
