import { useQuery } from "@tanstack/react-query";
import { getPokemonSkills } from "../services/api";

export default function useGetPokemonSkills(queryKey = "skills") {
  const { data, isLoading, isError } = useQuery([queryKey], () =>
    getPokemonSkills()
  );

  return { pokemonSkills: data, isLoading, isError };
}
