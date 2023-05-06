import { useGetPokemonSpecies } from "../../utils/hooks";
import Evolution from "../evolution";

export default function Species({ data }) {
  const { species, isLoading, isError } = useGetPokemonSpecies(
    `species/${data}`,
    data
  );
  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Something wrong...</h2>;

  return <Evolution name={species?.name} url={species?.evolution_chain?.url} />;
}
