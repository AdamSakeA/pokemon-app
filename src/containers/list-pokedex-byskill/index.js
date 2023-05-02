import React from "react";
import { useGetPokemonByType } from "../../utils/hooks";
import ListPokedex from "../list-pokedex";

export default function ListPokedexBySkill({ type }) {
  const { pokemonByType, isEmpty } = useGetPokemonByType(`/type/${type}`, type);

  if (isEmpty) return <h1>{type} is empty</h1>;

  const dataPokedex = pokemonByType?.pokemon?.map((item) => (
    <ListPokedex name={item?.pokemon?.name} key={item.pokemon.name} />
  ));

  return dataPokedex;
}
