import { useInfiniteQuery } from "@tanstack/react-query";
import { getPokemonList } from "../services/api";

export default function useGetPokemonList() {
  const {
    data,
    isLoading,
    isError,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["Pokemon List"],
    ({ pageParam }) => getPokemonList(pageParam),
    {
      getNextPageParam: (lastPage) =>
        lastPage.next ? lastPage.next : undefined,
      keepPreviousData: true,
    }
  );

  const pages = data?.pages;
  const pokemons = [];
  pages?.forEach((item) => {
    pokemons.push([...item.results]);
  });

  return {
    pokemonList: pokemons,
    isLoading,
    isError,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
}
