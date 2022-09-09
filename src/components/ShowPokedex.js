import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Pokedex.scss';
import axios from "axios";
import FilterPokedex from './FilterPokedex';
import PokemonCards from './PokemonCards';
import PokeCardSkeleton from './PokeCardSkeleton';

export default function PokeLists({ pokedex, pokemonSkillName }) {
    let offset = 0;
    const [pokemonAll, setPokemonAll] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const getPokeList = async() => {
            await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`)
            .then((response) => {
                response.data.results.forEach(item => getPokeForm(item.name));
                setLoading(!loading)
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                }
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
            offset += 10;
        }

        const handleScroll = (e) => {
            if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
                setLoading(true)
                setTimeout(() => {
                    getPokeList()
                }, 1500);
            }
        }

        getPokeList()
        window.addEventListener('scroll', handleScroll)
    }, [])

    const getPokeForm = async(name) => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => {
                setPokemonAll(currentData => [...currentData, response.data]);
            })
            .catch((error) => {
                if (error) {
                    console.log(error.response.data);
                }
            });
    }

    const handleDetailPokemon = (name) => {
        navigate(`/pokedex/${name}`)
    }

    const PokemonResult = () => {
        return (
            <>
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
            </>
        )
    }

    return (
        <div className='pokelist-contents container'>
            {pokemonSkillName.length === 0 && pokedex.length === 0 ? 
                <PokemonResult /> : 
                <FilterPokedex 
                    handleDetailPokemon={handleDetailPokemon} 
                    pokedex={pokedex} 
                    pokemonSkillName={pokemonSkillName} 
                />
            }
            {loading && <PokeCardSkeleton cards={8}/>}
        </div>
    )
}


