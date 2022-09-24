import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import '../styles/Pokedex.scss';
import axios from "axios";
import FilterPokedex from './FilterPokedex';
import PokemonCards from './PokemonCards';
import PokeCardSkeleton from './PokeCardSkeleton';

export default function PokeLists({ pokedex, pokemonSkillName, pokeFilter }) {
  const [limit, setLimit] = useState(0);
  const [pokemonAll, setPokemonAll] = useState([]);
  const [listPokemonName, setListPokemonName] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemonList = async() => {
      await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${limit}&limit=20`)
        .then(response => {
          setTimeout(() => {
            setLoading(false)
            setListPokemonName(response.data.results.map(item => item.url))
          }, 3000);
        })
        .catch((error) => {
          if (error) {
              console.log(error.response.data);
          }
        })
    }

    getPokemonList()
  }, [limit])
  
  useEffect(() => {
    const getPokeForm = () => {
      listPokemonName.map(async(item) => {
        return await axios.get(item)
          .then(response => {
            setPokemonAll(item => [...item, response.data])
            setListPokemonName([])
          })
          .catch((error) => {
            if(error){
              console.log(error.response.data);
            }
          });
      })
    }

    getPokeForm()
  }, [listPokemonName])

  const handleScroll = () => {
      setLimit(limit + 20)
      setLoading(true)
  }

  const PokemonResult = () => {
    return ( 
      <InfiniteScroll 
          dataLength={pokemonAll.length} 
          next={() => handleScroll()} 
          hasMore={loading ? false : true}
          style={{ display: 'flex'}}
          endMessage={ <PokeCardSkeleton cards={4}/>}
          className="pokelist-contents"
          >
          {pokemonAll.map((item, i) => {
              const pokemonName = item.name.charAt(0).toUpperCase() + item.name.slice(1)
              return (
                  <PokemonCards 
                      name={item.name}
                      key={i + 1}
                      pokemonName={pokemonName}
                      img={item.sprites.other.home.front_default}
                      skill={item.types}
                  />
              )
          })}
      </InfiniteScroll>
    )
  }

    return (
        <div className='container'>
            {(pokemonSkillName.length === 0 && pokedex.length === 0 && !pokeFilter) && <PokemonResult />}
            {pokeFilter && <FilterPokedex pokedex={pokedex} pokemonSkillName={pokemonSkillName} />}
        </div>
    )
}


