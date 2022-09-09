import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PokemonCards from './PokemonCards';

export default function FilterPokedex({ pokedex, pokemonSkillName, handleDetailPokemon }) {
    const [pokemonFiltered, setPokemonFiltered] = useState([]);
    const [dataError, setDataError] = useState(false)

    useEffect(() => {
        const pokeSearch = async(name) => {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(function (response){
                setDataError(false)
                pokedex.length !== 0 ? setPokemonFiltered([response.data]) : setPokemonFiltered([])
            })
            .catch(function (error) {
                if(error) {
                    setDataError(true)
                }
            }) 
        }

        pokeSearch(pokedex.toLowerCase())
    }, [pokedex])

    useEffect(() => {
        const pokeFilteredBySkills = async(nama) => {
            setPokemonFiltered([])
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${nama}`)
            .then(response => {
                pokemonSkillName.length !== 0 ? setPokemonFiltered(currentData => [...currentData, response.data]) : console.log("Data Not Found")
            })
            .catch(error => {
                if (error) {
                    console.log(error.response)
                }
            })
        }

        pokemonSkillName.forEach(item => pokeFilteredBySkills(item))
    }, [pokemonSkillName])

    return (
        <>
            {!dataError ? 
                pokemonSkillName !== null && pokemonFiltered.map((item, i) => {
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
                })
                :
                <h1>Data Tidak Ada!</h1>    
            }
        </>
    )
}
