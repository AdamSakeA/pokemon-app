import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

export default function DetailPokemon() {
    const { pokedexName } = useSelector(state => state.pokemon);
    const [detailPokemon, setDetailPokemon] = useState([]);

    useEffect(() => {
        getDetailPokemon()
    }, [detailPokemon])

    const getDetailPokemon = async() => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokedexName}/`);
        try {
            setDetailPokemon([response.data])
        } catch (error) {
            if(error.response) {
                console.log(error.response.data)
            }
        }
    }

    return (
        <div className='detail-pokemon section'>
            {detailPokemon.map((item, i) => {
                return (
                    <div key={i}>
                        <h1>{item.name}</h1>
                        <img src={item.sprites.other.home.front_default} alt="poke-img" />
                    </div>
                )
            })}
        </div>
    )
}
