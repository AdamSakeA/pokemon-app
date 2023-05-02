import { useQuery } from "@tanstack/react-query";
import { getPokemonSkills } from "../services/api";

export default function useGetPokemonSkills() {
  const { data, isLoading, isError } = useQuery(["skills"], () =>
    getPokemonSkills()
  );

  return { pokemonSkills: data, isLoading, isError };
}
