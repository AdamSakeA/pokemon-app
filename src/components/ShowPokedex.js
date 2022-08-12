import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Pokedex.scss';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { update } from '../features/PokeSlice';
import FilterPokedex from './FilterPokedex';

export default function PokeLists({ pokedex, pokemonSkillName }) {
    let offset = 0;
    const [pokemonAll, setPokemonAll] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const getPokeList = async() => {
            await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`)
            .then((response) => {
                response.data.results.forEach(item => getPokeForm(item.name));
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                }
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
            offset += 10;
        }

        const handleScroll = (e) => {
            if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
                getPokeList()
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
        dispatch(update({pokedexName: name}))
        navigate(`/pokedex/${name}`)
    }

    const PokemonResult = () => {
        return (
            pokemonAll.map((item, i) => {
                const pokemonName = item.name.charAt(0).toUpperCase() + item.name.slice(1)
                return (
                <div onClick={() => handleDetailPokemon(item.name)} className='pokelist' key={i + 1}>
                    <img src={item.sprites.other.home.front_default} alt="poke-img" />
                    <h2>{pokemonName}</h2>
                    <div className='skills-pokelist'>
                    {item.types.map((item, i) => {
                        const pokemonSkill = item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)
                        return <button key={i} className={`pokeskill-item ${item.type.name}`}>{pokemonSkill}</button>
                    })}
                    </div>
                </div>
                )
            })
        )
    }

    return (
        <div className='pokelist-contents container'>
            {pokemonSkillName.length === 0 && pokedex.length === 0 ? <PokemonResult /> 
            : <FilterPokedex handleDetailPokemon={handleDetailPokemon} pokedex={pokedex} pokemonSkillName={pokemonSkillName} />}
        </div>
    )
}


