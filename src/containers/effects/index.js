import React from "react";
import { useGetPokemonByType } from "../../utils/hooks";
import { DetailEffect, DetailEffectSkeleton } from "../../components";

export default function Effects({ effect }) {
  const { pokemonByType, isLoading, isError } = useGetPokemonByType(
    `/type/${effect}/detail/`,
    effect
  );

  if (isLoading) return <DetailEffectSkeleton />;
  if (isError) return <h3>Something Wrong..</h3>;

  return <DetailEffect data={pokemonByType} />;
}
