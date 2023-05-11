import { useInfiniteQuery } from "@tanstack/react-query";
import { getPokemonList } from "../services/api";

export default function useGetPokemonList(queryKey = "Pokemon List") {
  const {
    data,
    isLoading,
    isError,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    [queryKey],
    ({ pageParam }) => getPokemonList(pageParam),
    {
      getNextPageParam: (lastPage) =>
        lastPage.next ? lastPage.next : undefined,

      keepPreviousData: true,
    }
  );

  const pages = data?.pages; // get pages from react query
  const pokemons = [];
  pages?.forEach((item) => {
    pokemons.push(...item.results);
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
