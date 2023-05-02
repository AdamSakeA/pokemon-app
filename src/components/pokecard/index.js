import React from "react";
import { CardContainer, SkillContainer } from "./pokecard.styles";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PokeCardSkeleton from "../pokecard-skeleton";
import Image from "../image";
import {
  textToCapitalize,
  deleteSymbol,
  imageLoader,
} from "../../utils/settings";

export default function PokeCards({ payload, isLoading, isNotFound }) {
  const navigate = useNavigate();
  const navigateToDetailPokemon = (name) => {
    navigate(`/pokedex/${name}`);
  };
  const image =
    !isNotFound &&
    imageLoader(payload?.sprites.other.dream_world.front_default);
  if (isLoading) return <PokeCardSkeleton />;

  return (
    <CardContainer onClick={() => navigateToDetailPokemon(payload.name)}>
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Image type="imageCard" src={image} alt="pokemon" />
      </motion.div>
      <h2>{deleteSymbol(payload?.name)}</h2>
      <SkillContainer>
        {payload?.types.map((item, i) => {
          return (
            <div key={i}>
              <h4>{textToCapitalize(item.type.name)}</h4>
            </div>
          );
        })}
      </SkillContainer>
    </CardContainer>
  );
}
