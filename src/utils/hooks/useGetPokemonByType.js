import { useQuery } from "@tanstack/react-query";
import { getPokemonByTypes } from "../services/api";

export default function useGetPokemonByType(queryKey = "", type) {
  const { data, isLoading, isError } = useQuery(
    [queryKey],
    () => getPokemonByTypes(type),
    {
      enabled: !!type,
    }
  );

  const isEmpty = data?.pokemon.length === 0;
  return { pokemonByType: data, isLoading, isError, isEmpty };
}
