import { useQuery } from "@tanstack/react-query";
import { getPokemonSpecies } from "../services/api";

export default function useGetPokemonSpecies(queryKey = "", pokemonName) {
  const { data, isLoading, isError } = useQuery([queryKey], () =>
    getPokemonSpecies(pokemonName)
  );

  return { species: data, isLoading, isError };
}
