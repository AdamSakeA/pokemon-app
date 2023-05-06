import React from "react";
import { useGetPokemonEvolution } from "../../utils/hooks";
import ListEvolution from "../list-evolution";

export default function Evolution({ name, url }) {
  const { evolution, isLoading, isError } = useGetPokemonEvolution(
    `/species/evolution/${name}`,
    url
  );

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>Something Wrong...</h3>;

  return <ListEvolution data={evolution} />;
}
