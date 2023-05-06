import React from "react";
import { useState, useEffect } from "react";
import EvolutionPokemon from "../evolution-pokemon";
import { Container } from "./listEvolution.styles";

export default function ListEvolution({ data }) {
  const [evolution, setEvolution] = useState([]);

  const updateArrEvolve = (chain) => {
    setEvolution((prevState) => [...prevState, chain]);
  };

  useEffect(() => {
    setEvolution([]);
    const chainning = data?.chain;

    const addChainToArrEvolve = (chain) => {
      if (chain !== null) {
        updateArrEvolve(chain);
      }
    };

    // Store the chain of evolution in an array
    addChainToArrEvolve(chainning?.species.name);
    chainning?.evolves_to.forEach((chain) => {
      addChainToArrEvolve(chain?.species.name);
      chain?.evolves_to.forEach((subChain) => {
        addChainToArrEvolve(subChain?.species.name);
      });
    });
  }, [data]);

  const displayEvolution = evolution.map((item) => {
    return <EvolutionPokemon name={item} />;
  });

  return (
    <Container>
      <h1>Evolution Pokemon</h1>
      {displayEvolution}
    </Container>
  );
}
