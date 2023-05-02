import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCards from "../pokecard/index.js";

export default function FilterPokedex({ pokedex, pokemonSkillName }) {
  // const [pokemonFiltered, setPokemonFiltered] = useState([]);
  // const [searchPokemonFilter, setSearchPokemonFilter] = useState([]);
  // const [isSkill, setIsSkill] = useState(false);
  // useEffect(() => {
  //   const pokeSearch = async (name) => {
  //     await axios
  //       .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  //       .then((response) => {
  //         setIsSkill(false);
  //         pokedex.length !== 0
  //           ? setSearchPokemonFilter([response.data])
  //           : setSearchPokemonFilter([]);
  //       })
  //       .catch((error) => {
  //         if (error) {
  //           console.log(error.response);
  //         }
  //       });
  //   };
  //   pokeSearch(pokedex.toLowerCase());
  // }, [pokedex]);
  // useEffect(() => {
  //   const pokeFilteredBySkills = async (nama) => {
  //     await axios
  //       .get(`https://pokeapi.co/api/v2/pokemon/${nama}`)
  //       .then((response) => {
  //         setIsSkill(true);
  //         pokemonSkillName.length !== 0
  //           ? setPokemonFiltered((currentData) => [
  //               ...currentData,
  //               response.data,
  //             ])
  //           : console.log("Data Not Found");
  //       })
  //       .catch((error) => {
  //         if (error) {
  //           console.log(error.response);
  //         }
  //       });
  //   };
  //   setPokemonFiltered([]);
  //   pokemonSkillName.forEach((item) => pokeFilteredBySkills(item));
  // }, [pokemonSkillName]);
  // return (
  //   <div className="pokelist-contents">
  //     {isSkill
  //       ? pokemonFiltered.map((item, i) => {
  //           const pokemonName =
  //             item.name.charAt(0).toUpperCase() + item.name.slice(1);
  //           return (
  //             <PokemonCards
  //               name={item.name}
  //               key={i + 1}
  //               pokemonName={pokemonName}
  //               img={item.sprites.other.home.front_default}
  //               skill={item.types}
  //             />
  //           );
  //         })
  //       : searchPokemonFilter.map((item, i) => {
  //           const pokemonName =
  //             item.name.charAt(0).toUpperCase() + item.name.slice(1);
  //           return (
  //             <PokemonCards
  //               name={item.name}
  //               key={i + 1}
  //               pokemonName={pokemonName}
  //               img={item.sprites.other.home.front_default}
  //               skill={item.types}
  //             />
  //           );
  //         })}
  //   </div>
  // );
}
