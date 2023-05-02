import { useGetPokemonAbility } from "../../utils/hooks";
import { DetailAbility } from "../../components";

export default function Abilities({ ability }) {
  const { abilities, isLoading, isError } = useGetPokemonAbility(
    `/ability/${ability}`,
    ability
  );

  if (isLoading) return <h3>Loading..</h3>;
  if (isError) return <h3>Something Wrong..</h3>;

  return <DetailAbility data={abilities} />;
}
