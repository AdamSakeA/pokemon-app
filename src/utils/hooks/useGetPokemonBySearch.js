import { useQuery } from "@tanstack/react-query";
import { getPokemonBySearch } from "../services/api";

export default function useGetPokemonBySearch(queryKey = "", queryFn = "") {
  const { data, isLoading, isError } = useQuery(
    [queryKey],
    () => getPokemonBySearch(queryFn),
    {
      enabled: !!queryKey,
    }
  );

  const isNotFound = data === "Not Found";

  return { pokemonSearch: data, isLoading, isError, isNotFound };
}
