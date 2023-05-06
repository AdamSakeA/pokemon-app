import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPokemonEvolution } from "../services/api";

export default function useGetPokemonEvolution(queryKey = "", url) {
  const { data, isLoading, isError } = useQuery([queryKey], () =>
    getPokemonEvolution(url)
  );

  return { evolution: data, isLoading, isError };
}
