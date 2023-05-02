import React from "react";
import { useGetPokemonByType } from "../../utils/hooks";
import DetailEffect from "../../components/detail-effect";

export default function Effects({ effect }) {
  const { pokemonByType, isLoading, isError } = useGetPokemonByType(
    `/type/${effect}/detail/`,
    effect
  );

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>Something Wrong..</h3>;

  return <DetailEffect data={pokemonByType} />;
}
