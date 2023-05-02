import { useQuery } from "@tanstack/react-query";
import { getPokemonAbility } from "../services/api";

export default function useGetPokemonAbility(queryKey = "", ability) {
  const { data, isLoading, isError } = useQuery(
    [queryKey],
    () => getPokemonAbility(ability),
    {
      enabled: !!ability,
    }
  );

  return { abilities: data, isLoading, isError };
}
