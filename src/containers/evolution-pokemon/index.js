import React from "react";
import { useGetPokemonBySearch } from "../../utils/hooks";
import DetailEvolution from "../../components/detail-evolution";

export default function EvolutionPokemon({ name }) {
  const { pokemonSearch, isLoading, isError } = useGetPokemonBySearch(
    `/evolution/${name}`,
    name
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Something Wrong..</h1>;

  return <DetailEvolution data={pokemonSearch} />;
}
