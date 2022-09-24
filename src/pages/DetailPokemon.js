import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import '../styles/DetailPokemon.scss'
import { useParams } from 'react-router-dom'
import AbilityDetailPokemon from '../components/detail pokemon/AbilityDetailPokemon'
import EffectDetailPokemon from '../components/detail pokemon/EffectDetailPokemon'
import StatsDetailPokemon from '../components/detail pokemon/StatsDetailPokemon'

export default function DetailPokemon() {
    const [detailPokemon, setDetailPokemon] = useState({
        dataPokemon : [],
        abilities : [],
        types : [],
        stats : []
    });
    const { pokemonId } = useParams()

    useEffect(() => {
        const getDetailPokemon = async(name) => {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
            .then(response => {
                setDetailPokemon({
                    dataPokemon: [response.data], 
                    abilities: response.data.abilities.map(item => item.ability.name),
                    types : response.data.types,
                    stats : response.data.stats
                 })
            })
            .catch(error => {
                if(error) {
                    console.log(error.response.data)
                }
            })
        }

        getDetailPokemon(pokemonId)
    }, [pokemonId])

    return (
        <div className='detail-pages'>
            <Navbar />
            {detailPokemon.dataPokemon.map((item, i) => {
                const pokemonName = item.name.charAt(0).toUpperCase() + item.name.slice(1);
                return (
                    <div className='detail-pokemon container' key={i}>
                        <div className='head-detail'>
                            <img src={item.sprites.other.home.front_default} alt="poke-img" />
                            <div className='desc-head-detail'>
                                <h1 className='title-detail'>{pokemonName}</h1>
                                <div className='desc-detail' >
                                    {item.types.map((item, i) => {
                                        const skillsName = item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)
                                        return (
                                            <h3 className='title-desc-detail' key={i}>{skillsName}</h3>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <AbilityDetailPokemon ability={detailPokemon.abilities} />
                        <div className='effect-stats-container'>
                            <EffectDetailPokemon types={detailPokemon.types} />
                            <StatsDetailPokemon stats={detailPokemon.stats} />
                        </div>
                    </div>
                )
            })}
            <Footer />
        </div>
    )
}
