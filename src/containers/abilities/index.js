import { useGetPokemonAbility } from "../../utils/hooks";
import { DetailAbility } from "../../components";
import DetailAbilitySkeleton from "../../components/detail-ability-skeleton";

export default function Abilities({ ability }) {
  const { abilities, isLoading, isError } = useGetPokemonAbility(
    `/ability/${ability}`,
    ability
  );

  if (isLoading) return <DetailAbilitySkeleton />;
  if (isError) return <h3>Something Wrong..</h3>;

  return <DetailAbility data={abilities} />;
}
