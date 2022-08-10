import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Pokedex.scss';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { update } from '../features/PokeSlice';

export default function PokeLists({ pokedex }) {
    const [pokemonAll, setPokemonAll] = useState([]);
    const [pokemonFiltered, setPokemonFiltered] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        getPokeList()
    }, [])

    useEffect(() => {
        pokeSearch()
    }, [pokedex])

    const getPokeList = async() => {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon-form")
        try {
            response.data.results.map(item => getPokeForm(item.name))
        } catch (error) {
            if(error.response) {
                console.log(error.response.data)
            }
        }
    }

    const getPokeForm = async(name) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        try {
            setPokemonAll(currentData => [...currentData, response.data])
        } catch (error) {
            if(error.response) {
                console.log(error.response.data)
            }
        }
    }

    const pokeSearch = () => {
        const pokeFiltered = pokemonAll.filter(item => item.name === pokedex) 
        if (pokedex.length !== 0) {
            return setPokemonFiltered(pokeFiltered)
        } else {
            return setPokemonFiltered([])
        }
    }

    const handleDetailPokemon = (name) => {
        dispatch(update({pokedexName: name}))
        navigate(`/pokedex/${name}`)
    }

    return (
        <div className='pokelist-contents container'>
            {pokedex.length === 0 && pokemonAll.map((item, i) => {
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
            })}
            {pokedex.length > 0 && pokemonFiltered.map((item, i) => {
                const pokemonName = item.name.charAt(0).toUpperCase() + item.name.slice(1)
                return (
                <div onClick={() => navigate(`/pokedex/${item.name}`)} className='pokelist' key={i + 1}>
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
            })}
        </div>
    )
}


