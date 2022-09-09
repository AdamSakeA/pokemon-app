import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import '../styles/DetailPokemon.scss'

export default function DetailPokemon({ pokemonName }) {
    const [detailPokemon, setDetailPokemon] = useState([]);

    useEffect(() => {
        const getDetailPokemon = async() => {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
            .then(response => {
                setDetailPokemon([response.data])
            })
            .catch(error => {
                if(error) {
                    console.log(error.response.data)
                }
            })
        }

        getDetailPokemon()
    }, [detailPokemon, pokemonName])


    return (
        <div className='detail-pages'>
            <Navbar />
            {detailPokemon.map((item, i) => {
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
                                            <p className='title-desc-detail' key={i}>{skillsName}</p>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <Footer />
        </div>
    )
}
